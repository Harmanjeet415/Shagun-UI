import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { createSeedState, formatDate, formatMoney, invitationTemplates, makeId } from './data.js'
import { applyCuratedTranslation, watchCuratedTranslation } from './curated-i18n.js'
import { featuredLanguages, globalLanguages } from './language-options.js'
import { activateAutomaticTranslation, clearAutomaticTranslation, prepareAutomaticTranslation } from './google-translation.js'
import './mobile-redesign.css'
import './mobile-only.css'
import './distinct-redesign.css'
import './royal-theme.css'
import './royal-ornament.css'
import './profile-menu.css'
import './translate-control.css'
import './language-search.css'

const KEY = 'shagun-phone-architecture-v1'
const LANGUAGE_KEY = 'shagun-language-v1'
const tabs = [
  ['invite', 'Invite', 'edit'],
  ['guest', 'Guest view', 'mail'],
  ['menu', 'Menu', 'utensils'],
  ['ledger', 'Shagun', 'gift'],
]

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || createSeedState() } catch { return createSeedState() }
}

function loadLanguage() {
  const savedCode = localStorage.getItem(LANGUAGE_KEY)
  return globalLanguages.find((item) => item.code === savedCode) || featuredLanguages[0]
}

export default function MobileShagun() {
  const [db, setRaw] = useState(load)
  const [tab, setTab] = useState('invite')
  const [eventId, setEventId] = useState('event-khanna-wedding')
  const [toast, setToast] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState(loadLanguage)
  const [languageQuery, setLanguageQuery] = useState('')
  const profileRef = useRef(null)
  const languageRef = useRef(null)

  const setDb = (updater) => setRaw((old) => {
    const next = typeof updater === 'function' ? updater(old) : updater
    localStorage.setItem(KEY, JSON.stringify(next))
    return next
  })
  const event = db.events.find((item) => item.id === eventId) || db.events[0]
  const host = db.users.find((item) => item.id === event.ownerId)
  const hostEvents = db.events.filter((item) => item.ownerId === event.ownerId)
  const visibleLanguages = useMemo(() => {
    const query = languageQuery.trim().toLocaleLowerCase()
    if (!query) return featuredLanguages
    return globalLanguages.filter((item) => `${item.name} ${item.native} ${item.code}`.toLocaleLowerCase().includes(query))
  }, [languageQuery])
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2400) }

  useEffect(() => {
    delete document.documentElement.dataset.phoneTheme
    const closeMenus = (event) => {
      if (event.key === 'Escape') { setProfileOpen(false); setLanguageOpen(false); setLanguageQuery(''); return }
      if (event.type === 'mousedown' && !profileRef.current?.contains(event.target)) setProfileOpen(false)
      if (event.type === 'mousedown' && !languageRef.current?.contains(event.target)) { setLanguageOpen(false); setLanguageQuery('') }
    }
    document.addEventListener('mousedown', closeMenus)
    document.addEventListener('keydown', closeMenus)
    return () => {
      document.removeEventListener('mousedown', closeMenus)
      document.removeEventListener('keydown', closeMenus)
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    const body = document.body
    const previousRootBehavior = root.style.scrollBehavior
    const previousBodyBehavior = body.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    root.scrollTop = 0
    body.scrollTop = 0
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const app = document.querySelector('.ms-app')
    if (app) app.scrollTop = 0
    const restore = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousRootBehavior
      body.style.scrollBehavior = previousBodyBehavior
    })
    return () => window.cancelAnimationFrame(restore)
  }, [tab])

  useEffect(() => {
    const root = document.querySelector('.ms-page')
    if (!root) return undefined
    root.setAttribute('lang', language.code)
    root.setAttribute('dir', 'ltr')
    root.dataset.contentDirection = language.rtl ? 'rtl' : 'ltr'
    if (!language.curated) {
      applyCuratedTranslation(root, 'en')
      activateAutomaticTranslation(language.code).then((ready) => {
        if (!ready) {
          setToast('Automatic translation could not load. Please try again.')
          window.setTimeout(() => setToast(''), 2800)
        }
      })
      return undefined
    }
    clearAutomaticTranslation()
    applyCuratedTranslation(root, language.code)
    return watchCuratedTranslation(root, () => language.code)
  }, [language])

  const changeLanguage = (nextLanguage) => {
    localStorage.setItem(LANGUAGE_KEY, nextLanguage.code)
    if (!nextLanguage.curated) {
      prepareAutomaticTranslation(nextLanguage.code)
      window.location.reload()
      return
    }
    if (!language.curated) {
      clearAutomaticTranslation()
      window.location.reload()
      return
    }
    setLanguage(nextLanguage)
    setLanguageQuery('')
    setLanguageOpen(false)
  }

  return (
    <div className="ms-page" key={language.code}>
      <aside className="ms-rail">
        <Logo />
        <div className="ms-rail-copy">
          <span>CELEBRATION STUDIO</span>
          <h1>One beautiful flow, from invitation to blessing.</h1>
          <p>Design, preview, share and manage the entire celebration from a single synchronized workspace.</p>
        </div>
        <div className="ms-rail-steps">
          {tabs.map(([id, label, icon], index) => (
            <button className={tab === id ? 'active' : ''} onClick={() => setTab(id)} key={id}>
              <i>{index + 1}</i><span><strong>{label}</strong><small>{['Create the celebration', 'See exactly what guests see', 'Curate the feast', 'Track every blessing'][index]}</small></span><Icon name={icon} size={17} />
            </button>
          ))}
        </div>
        <div className="ms-demo"><Icon name="shield" /><span><strong>Interactive prototype</strong><small>No real money moves</small></span></div>
      </aside>

      <main className="ms-app">
        <header className="ms-top">
          <div className="ms-mobile-logo"><Logo /></div>
          <div className="ms-event-select">
            <small>Working on</small>
            <select value={event.id} onChange={(e) => setEventId(e.target.value)}>
              {hostEvents.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </div>
          <div className="ms-top-actions">
            <div className="ms-language" ref={languageRef} translate="no">
              <button className="ms-language-trigger" onClick={() => { setLanguageOpen((open) => { if (open) setLanguageQuery(''); return !open }); setProfileOpen(false) }} aria-expanded={languageOpen} aria-haspopup="dialog" aria-label={`Translate language: ${language.name}`}>
                <span className="ms-translate-glyph"><b>文</b><i>A</i></span>
                <strong>{language.short}</strong>
                <Icon name="chevronDown" size={13} />
              </button>
              {languageOpen && <div className="ms-language-menu" role="dialog" aria-label="Choose language">
                <header><span className="ms-translate-glyph"><b>文</b><i>A</i></span><div><strong>Choose language</strong><small>6 recommended · search globally</small></div></header>
                <label className="ms-language-search"><Icon name="search" size={15} /><input value={languageQuery} onChange={(e) => setLanguageQuery(e.target.value)} placeholder="Search any language…" autoFocus />{languageQuery && <button type="button" onClick={() => setLanguageQuery('')} aria-label="Clear language search"><Icon name="x" size={13} /></button>}</label>
                <div className={`ms-language-list ${languageQuery ? 'searching' : ''}`} role="radiogroup" aria-label="Available languages">{visibleLanguages.map((item) => <button role="radio" aria-checked={language.code === item.code} className={language.code === item.code ? 'active' : ''} onClick={() => changeLanguage(item)} key={item.code}><span>{item.short}</span><span className="ms-language-copy"><strong>{item.name}</strong><small>{item.native}</small></span>{language.code === item.code && <Icon name="check" size={14} />}</button>)}{!visibleLanguages.length && <p className="ms-language-empty">No language found. Try another name.</p>}</div>
                <footer><i /> Curated <i /> Automatic global translation</footer>
              </div>}
            </div>
            <div className="ms-profile" ref={profileRef}>
              <button className="ms-profile-trigger" onClick={() => { setProfileOpen((open) => !open); setLanguageOpen(false); setLanguageQuery('') }} aria-expanded={profileOpen} aria-haspopup="menu" aria-label="Open profile menu">
                <span className="ms-avatar">{host?.avatar}</span>
                <Icon name="chevronDown" size={14} />
              </button>
              {profileOpen && <div className="ms-profile-menu" role="menu">
                <header><span className="ms-profile-large">{host?.avatar}</span><div><strong>{host?.name}</strong><small>{host?.email}</small><em>Event owner</em></div></header>
                <div className="ms-profile-event"><span>Current celebration</span><strong>{event.name}</strong><small>{formatDate(event.startDate)}</small></div>
                <nav>
                  <button role="menuitem" onClick={() => { setTab('invite'); setProfileOpen(false) }}><Icon name="edit" /><span><strong>Event studio</strong><small>Edit and share the invitation</small></span><Icon name="chevronRight" size={14} /></button>
                  <button role="menuitem" onClick={() => { setTab('guest'); setProfileOpen(false) }}><Icon name="mail" /><span><strong>Guest preview</strong><small>See the invitation experience</small></span><Icon name="chevronRight" size={14} /></button>
                  <button role="menuitem" onClick={() => { setTab('menu'); setProfileOpen(false) }}><Icon name="utensils" /><span><strong>Catering menu</strong><small>Manage dishes and caterer</small></span><Icon name="chevronRight" size={14} /></button>
                  <button role="menuitem" onClick={() => { setTab('ledger'); setProfileOpen(false) }}><Icon name="gift" /><span><strong>Shagun ledger</strong><small>View private gift records</small></span><Icon name="chevronRight" size={14} /></button>
                </nav>
                <footer><Icon name="shield" size={14} /> Local demonstration account</footer>
              </div>}
            </div>
          </div>
          <div id="google_translate_element" className="ms-google-widget" aria-hidden="true" />
        </header>

        <nav className="ms-tabs" aria-label="Celebration workflow">
          {tabs.map(([id, label, icon]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon name={icon} size={17} /><span>{label}</span></button>)}
        </nav>

        <div className="ms-view">
          {tab === 'invite' && <InviteStudio db={db} setDb={setDb} event={event} notify={notify} showPreview={() => { setPreviewOpen(true); setTab('guest') }} />}
          {tab === 'guest' && <GuestExperience db={db} setDb={setDb} event={event} opened={previewOpen} setOpened={setPreviewOpen} notify={notify} />}
          {tab === 'menu' && <MenuStudio db={db} setDb={setDb} event={event} notify={notify} />}
          {tab === 'ledger' && <Ledger db={db} setDb={setDb} event={event} notify={notify} />}
        </div>
      </main>
      {toast && <div className="ms-toast"><Icon name="check" size={16} />{toast}</div>}
    </div>
  )
}

function InviteStudio({ db, setDb, event, notify, showPreview }) {
  const functions = db.eventFunctions.filter((item) => item.eventId === event.id)
  const main = functions[0] || {}
  const publicInvite = db.invitations.find((item) => item.eventId === event.id && !item.guestId)
  const guests = db.guests.filter((item) => item.eventId === event.id)
  const [guest, setGuest] = useState({ name: '', phone: '', count: 1 })
  const [country, setCountry] = useState('IN')
  const [shagunOn, setShagunOn] = useState(true)
  const shareUrl = `${location.origin}${location.pathname}#/invitation/${publicInvite?.token || event.publicCode}`
  const shareText = `You're invited to ${event.name} · ${event.type}\n${formatDate(event.startDate)} at ${main.venue || 'venue to be announced'}\n\nOpen your invitation and RSVP: ${shareUrl}`
  const patchEvent = (values) => setDb((data) => ({ ...data, events: data.events.map((item) => item.id === event.id ? { ...item, ...values } : item) }))
  const patchFunction = (values) => setDb((data) => ({ ...data, eventFunctions: data.eventFunctions.map((item) => item.id === main.id ? { ...item, ...values } : item) }))
  const addGuest = () => {
    if (!guest.name.trim() || !guest.phone.trim()) return notify('Add a guest name and phone number')
    const id = makeId('guest')
    setDb((data) => ({ ...data,
      guests: [...data.guests, { id, eventId: event.id, userId: null, groupId: null, name: guest.name.trim(), phone: guest.phone.trim(), email: '', invitedCount: Number(guest.count), functionIds: functions.map((item) => item.id), inviteStatus: 'draft', rsvp: 'pending', attending: 0, shagunStatus: 'none' }],
      invitations: [...data.invitations, { id: makeId('invite'), eventId: event.id, guestId: id, token: `${guest.name.split(' ')[0].toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`, isPrivate: true, sentAt: null, openedAt: null }],
    }))
    setGuest({ name: '', phone: '', count: 1 }); notify('Guest added with a personal link')
  }

  return <div className="ms-stack">
    <ViewIntro kicker="Host workspace" title="Create the invitation" text="Everything you change here appears instantly in the guest experience." />

    <Panel number="01" title="Celebration details" subtitle="The essentials guests need at a glance">
      <div className="ms-form two">
        <Field label="Event type"><select value={event.type} onChange={(e) => patchEvent({ type: e.target.value })}>{['Wedding','Reception','Engagement','Mehndi','Haldi','Sangeet','Birthday','Housewarming','Nikah','Walima'].map((type) => <option key={type} value={type}>{type}</option>)}</select></Field>
        <Field label="Names on the card"><input value={event.name} onChange={(e) => patchEvent({ name: e.target.value })} /></Field>
        <Field label="Date"><input type="date" value={main.date || event.startDate} onChange={(e) => { patchFunction({ date: e.target.value }); patchEvent({ startDate: e.target.value }) }} /></Field>
        <Field label="Time"><input type="time" value={main.time || ''} onChange={(e) => patchFunction({ time: e.target.value })} /></Field>
        <Field label="Venue" wide><input value={main.venue || ''} onChange={(e) => patchFunction({ venue: e.target.value })} /></Field>
        <Field label="Address" wide><input value={main.address || ''} onChange={(e) => patchFunction({ address: e.target.value })} /></Field>
        <Field label="Message for guests" wide><textarea rows="3" value={event.description} onChange={(e) => patchEvent({ description: e.target.value })} /></Field>
      </div>
    </Panel>

    <Panel number="02" title="Invitation design" subtitle="Five cultural moods, crafted like printed keepsakes">
      <div className="ms-templates">{invitationTemplates.map((template) => <button className={event.templateId === template.id ? 'selected' : ''} onClick={() => patchEvent({ templateId: template.id })} key={template.id}><MiniCard template={template} /><strong>{template.name}</strong><small>{template.label}</small>{event.templateId === template.id && <i><Icon name="check" size={12} /></i>}</button>)}</div>
      <button className="ms-secondary full" onClick={showPreview}><Icon name="sparkles" /> See the envelope open</button>
    </Panel>

    <Panel number="03" title="Shagun settings" subtitle="Choose how blessings are received">
      <div className="ms-choice"><button className={country === 'IN' ? 'active' : ''} onClick={() => setCountry('IN')}>🇮🇳 <span><strong>India</strong><small>UPI · ₹</small></span></button><button className={country === 'PK' ? 'active' : ''} onClick={() => setCountry('PK')}>🇵🇰 <span><strong>Pakistan</strong><small>Raast · Rs</small></span></button></div>
      <Field label={country === 'IN' ? 'Receiver UPI ID' : 'Receiver Raast ID'}><input value={event.paymentAccount.upiId} onChange={(e) => patchEvent({ paymentAccount: { ...event.paymentAccount, upiId: e.target.value } })} /></Field>
      <label className="ms-toggle"><span><strong>Let guests send Shagun</strong><small>Payments remain simulated in this prototype</small></span><input type="checkbox" checked={shagunOn} onChange={(e) => setShagunOn(e.target.checked)} /><i /></label>
    </Panel>

    <Panel number="04" title="Guest list" subtitle="Create personal links for individuals or whole families">
      <div className="ms-form guest-row"><Field label="Guest or family name"><input value={guest.name} onChange={(e) => setGuest({ ...guest, name: e.target.value })} placeholder="e.g. Sharma family" /></Field><Field label="Phone"><input value={guest.phone} onChange={(e) => setGuest({ ...guest, phone: e.target.value })} placeholder="+91 …" /></Field><Field label="People"><input type="number" min="1" value={guest.count} onChange={(e) => setGuest({ ...guest, count: e.target.value })} /></Field><button className="ms-primary" onClick={addGuest}><Icon name="plus" /> Add</button></div>
      <div className="ms-guests">{guests.slice(0, 5).map((item) => <div key={item.id}><span>{initials(item.name)}</span><p><strong>{item.name}</strong><small>{item.phone} · up to {item.invitedCount}</small></p><Status value={item.rsvp} /></div>)}{!guests.length && <Empty text="Your personal invitation links will appear here." />}</div>
    </Panel>

    <Panel number="05" title="Share invitation" subtitle="A polished message, ready for WhatsApp or SMS">
      <div className="ms-message">{shareText}</div>
      <div className="ms-actions"><a className="ms-primary" href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer">WhatsApp <Icon name="arrowUpRight" /></a><button className="ms-secondary" onClick={async () => { await navigator.clipboard?.writeText(shareText); notify('Invitation message copied') }}><Icon name="copy" /> Copy for SMS</button></div>
      <p className="ms-note"><Icon name="info" size={14} /> Personal links identify invitation records; production identity verification needs a real OTP provider.</p>
    </Panel>
  </div>
}

function GuestExperience({ db, setDb, event, opened, setOpened, notify }) {
  const functions = db.eventFunctions.filter((item) => item.eventId === event.id)
  const menu = db.menus.find((item) => item.eventId === event.id)
  const items = db.menuItems.filter((item) => item.menuId === menu?.id)
  const [rsvp, setRsvp] = useState('pending')
  const [count, setCount] = useState(1)
  const [pay, setPay] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(1101)
  const [blessing, setBlessing] = useState('')
  const template = invitationTemplates.find((item) => item.id === event.templateId)
  const send = () => {
    if (!name.trim()) return notify('Add your name before sending Shagun')
    setDb((data) => ({ ...data, transactions: [{ id: makeId('txn'), eventId: event.id, invitationId: null, senderUserId: null, senderName: name, senderContact: '', receiverUserId: event.ownerId, amount, method: 'UPI', status: 'pending', reference: `DEMO-UPI-${String(Date.now()).slice(-6)}`, blessing, createdAt: new Date().toISOString(), isDemo: true }, ...data.transactions] }))
    setPay(false); notify('Pending demo Shagun recorded — no money moved')
  }
  return <div className="ms-stack">
    <ViewIntro kicker="Guest experience" title="See what your guests see" text="A warm, focused invitation journey designed first for the phone." />
    <div className={`ms-envelope-stage ${opened ? 'opened' : ''}`}>
      <div className="ms-envelope-back" />
      <div className="ms-letter"><InviteCard event={event} functions={functions} template={template} /></div>
      <div className="ms-envelope-front"><span>For you & your family</span></div>
      <div className="ms-envelope-flap" />
      <div className="ms-seal">{initials(event.name)}</div>
    </div>
    <button className="ms-primary ms-open" onClick={() => setOpened(!opened)}>{opened ? 'Replay envelope' : 'Open invitation'} <Icon name={opened ? 'sparkles' : 'chevronDown'} /></button>

    <Panel title="Will you celebrate with us?" subtitle="Your reply goes directly to the host">
      <div className="ms-rsvp">{[['yes','Joyfully accept','check'],['maybe','Maybe','clock'],['no',"Can't attend",'x']].map(([id, label, icon]) => <button className={rsvp === id ? 'active' : ''} onClick={() => setRsvp(id)} key={id}><Icon name={icon} /><span>{label}</span></button>)}</div>
      {['yes','maybe'].includes(rsvp) && <Field label="Number attending"><select value={count} onChange={(e) => setCount(e.target.value)}>{[1,2,3,4,5,6].map((item) => <option key={item}>{item}</option>)}</select></Field>}
      <button className="ms-primary full" onClick={() => notify(`RSVP saved: ${rsvp === 'yes' ? `${count} attending` : rsvp}`)}>Save RSVP</button>
    </Panel>

    {menu?.enabled && <Panel title="What's on the menu" subtitle={`Catered by ${menu.caterer}`}><MenuList items={items} /></Panel>}
    <Panel title="Send Shagun" subtitle={`A blessing for ${event.name}`}>
      {!pay ? <div className="ms-gift-intro"><i><Icon name="gift" size={28} /></i><p>Choose an auspicious amount and leave a personal blessing.</p><button className="ms-gold" onClick={() => setPay(true)}>Send Shagun</button><small><Icon name="shield" size={13} /> Explicitly simulated payment</small></div> : <div className="ms-payment"><div className="ms-amounts">{[501,1101,2101,5101].map((item) => <button className={amount === item ? 'active' : ''} key={item} onClick={() => setAmount(item)}>{formatMoney(item)}</button>)}</div><Field label="Your name"><input value={name} onChange={(e) => setName(e.target.value)} /></Field><Field label="Blessing"><textarea value={blessing} onChange={(e) => setBlessing(e.target.value)} placeholder="Write a few heartfelt words…" /></Field><div className="ms-pay-total"><span>You record</span><strong>{formatMoney(amount)}</strong><small>Status: Pending demo record</small></div><button className="ms-gold full" onClick={send}>Record simulated UPI</button></div>}
    </Panel>
  </div>
}

function MenuStudio({ db, setDb, event, notify }) {
  const menu = db.menus.find((item) => item.eventId === event.id)
  const items = db.menuItems.filter((item) => item.menuId === menu?.id)
  const [dish, setDish] = useState({ name: '', description: '', category: 'Starters', dietary: 'veg' })
  const patchMenu = (values) => setDb((data) => ({ ...data, menus: data.menus.map((item) => item.id === menu.id ? { ...item, ...values } : item) }))
  const add = () => { if (!dish.name.trim()) return notify('Enter a dish or drink name'); setDb((data) => ({ ...data, menuItems: [...data.menuItems, { id: makeId('item'), menuId: menu.id, ...dish }] })); setDish({ ...dish, name: '', description: '' }); notify('Added to the guest menu') }
  return <div className="ms-stack"><ViewIntro kicker="Catering studio" title="Curate the feast" text="A guest-friendly menu with clear dietary markers and thoughtful descriptions." />
    <Panel number="01" title="Catering partner"><label className="ms-toggle"><span><strong>Show menu on invitation</strong><small>Guests can view but never edit it</small></span><input type="checkbox" checked={menu.enabled} onChange={(e) => patchMenu({ enabled: e.target.checked })} /><i /></label><div className="ms-form two"><Field label="Caterer"><input value={menu.caterer} onChange={(e) => patchMenu({ caterer: e.target.value })} /></Field><Field label="Phone"><input value={menu.contact} onChange={(e) => patchMenu({ contact: e.target.value })} /></Field></div><label className="ms-upload"><Icon name="upload" /><span><strong>Add a printed menu photo</strong><small>JPG or PNG · stored locally in this prototype</small></span><input type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) { patchMenu({ imageName: file.name }); notify(`${file.name} attached`) } }} /></label></Panel>
    <Panel number="02" title="Add a dish or drink"><div className="ms-form two"><Field label="Name"><input value={dish.name} onChange={(e) => setDish({ ...dish, name: e.target.value })} placeholder="e.g. Amritsari fish" /></Field><Field label="Short description"><input value={dish.description} onChange={(e) => setDish({ ...dish, description: e.target.value })} /></Field><Field label="Course"><select value={dish.category} onChange={(e) => setDish({ ...dish, category: e.target.value })}>{['Starters','Mains','Breads & rice','Desserts','Beverages'].map((item) => <option key={item} value={item}>{item}</option>)}</select></Field><Field label="Type"><select value={dish.dietary} onChange={(e) => setDish({ ...dish, dietary: e.target.value })}><option value="veg">Vegetarian</option><option value="non-veg">Non-vegetarian</option><option value="beverage">Drink</option></select></Field></div><button className="ms-primary full" onClick={add}><Icon name="plus" /> Add to menu</button></Panel>
    <Panel number="03" title="Current menu" subtitle={`${items.length} dishes and drinks`}><MenuList items={items} editable remove={(id) => { setDb((data) => ({ ...data, menuItems: data.menuItems.filter((item) => item.id !== id) })); notify('Removed from menu') }} /></Panel>
  </div>
}

function Ledger({ db, setDb, event, notify }) {
  const rows = db.transactions.filter((item) => item.eventId === event.id)
  const total = rows.reduce((sum, item) => sum + item.amount, 0)
  const [cash, setCash] = useState({ name: '', amount: '' })
  const record = () => { if (!cash.name || Number(cash.amount) < 1) return notify('Enter sender and amount'); setDb((data) => ({ ...data, transactions: [{ id: makeId('txn'), eventId: event.id, invitationId: null, senderUserId: null, senderName: cash.name, senderContact: '', receiverUserId: event.ownerId, amount: Number(cash.amount), method: 'Cash', status: 'reported', reference: `CASH-${String(Date.now()).slice(-6)}`, blessing: '', createdAt: new Date().toISOString(), isDemo: false }, ...data.transactions] })); setCash({ name: '', amount: '' }); notify('Cash Shagun recorded as reported') }
  return <div className="ms-stack"><ViewIntro kicker="Private host ledger" title="Every blessing, remembered" text="Digital demo records and physical cash stay clearly distinguished." />
    <div className="ms-total"><span>Total recorded</span><strong>{formatMoney(total)}</strong><small>{rows.filter((item) => item.status === 'verified').length} verified demo · {rows.filter((item) => ['pending','reported'].includes(item.status)).length} pending or reported</small><Icon name="gift" /></div>
    <Panel title="Record physical cash" subtitle="A manual record, never shown as digitally verified"><div className="ms-form cash-row"><Field label="Sender"><input value={cash.name} onChange={(e) => setCash({ ...cash, name: e.target.value })} /></Field><Field label="Amount"><input type="number" value={cash.amount} onChange={(e) => setCash({ ...cash, amount: e.target.value })} /></Field><button className="ms-primary" onClick={record}>Record</button></div></Panel>
    <Panel title="Shagun received"><div className="ms-ledger">{rows.map((item) => <div key={item.id}><span className="ms-ledger-avatar">{initials(item.senderName)}</span><p><strong>{item.senderName}</strong><small>{item.method} · {formatDate(item.createdAt)}</small>{item.blessing && <em>“{item.blessing}”</em>}</p><aside><strong>{formatMoney(item.amount)}</strong><Status value={item.status} /></aside></div>)}{!rows.length && <Empty text="Shagun records will appear here." />}</div></Panel>
    <p className="ms-note"><Icon name="info" size={14} /> Pending and reported records are not verified bank transactions. Production verification must happen server-side.</p>
  </div>
}

function Logo() { return <div className="ms-logo"><span>श</span><div><strong>Sha<i>gun</i></strong><small>CELEBRATE TOGETHER</small></div></div> }
function ViewIntro({ kicker, title, text }) { return <header className="ms-intro"><div><span>{kicker}</span><h2>{title}</h2><p>{text}</p></div></header> }
function Panel({ number, title, subtitle, children }) { return <section className="ms-panel"><header>{number && <span>{number}</span>}<div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div></header><div>{children}</div></section> }
function Field({ label, wide, children }) { return <label className={`ms-field ${wide ? 'wide' : ''}`}><span>{label}</span>{children}</label> }
function MiniCard({ template }) { return <div className={`ms-mini t-${template.id}`}><span>{template.symbol}</span><i /><b>A & R</b><small>12 · 12 · 26</small></div> }
function InviteCard({ event, functions, template }) { const main = functions[0] || {}; return <article className={`ms-card t-${template.id}`}><div className="ms-card-pattern" /><span className="ms-card-kicker">{event.type === 'Housewarming' ? 'Bless our new home' : 'Together with their families'}</span><small>{event.type}</small><i /><h2>{event.name}</h2><strong>{formatDate(main.date || event.startDate)}</strong><p>{main.venue}<br />{main.address}</p><em>{event.description}</em><b>{template.symbol}</b></article> }
function MenuList({ items, editable, remove }) { const groups = useMemo(() => items.reduce((all, item) => ({ ...all, [item.category]: [...(all[item.category] || []), item] }), {}), [items]); return <div className="ms-menu-list">{Object.entries(groups).map(([category, dishes]) => <section key={category}><h4>{category}</h4>{dishes.map((dish) => <div key={dish.id}><i className={dish.dietary} /><p><strong>{dish.name}</strong>{dish.description && <small>{dish.description}</small>}</p>{editable && <button onClick={() => remove(dish.id)}><Icon name="trash" size={15} /></button>}</div>)}</section>)}</div> }
function Status({ value }) { const labels = { pending: 'Pending', yes: 'Attending', no: "Can't attend", maybe: 'Maybe', verified: 'Verified', reported: 'Reported', failed: 'Failed', none: 'Not sent' }; return <span className={`ms-status ${value}`}>{labels[value] || value}</span> }
function Empty({ text }) { return <div className="ms-empty"><Icon name="sparkles" />{text}</div> }
function initials(name = '') { return name.split(/[\s&,]+/).filter(Boolean).slice(0, 2).map((item) => item[0]).join('').toUpperCase() }
