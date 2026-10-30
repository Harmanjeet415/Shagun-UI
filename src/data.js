export const demoIdentityIds = ['user-host', 'user-guest', 'user-both']

export const invitationTemplates = [
  { id: 'shaadi', name: 'Shaadi', label: 'Royal vermilion', colors: ['#7d2636', '#d6a545'], symbol: 'शुभ' },
  { id: 'mehndi', name: 'Mehndi', label: 'Botanical celebration', colors: ['#376b4d', '#e0a93b'], symbol: 'मेहंदी' },
  { id: 'noor', name: 'Noor', label: 'Moonlit elegance', colors: ['#183b4c', '#caa45d'], symbol: 'نور' },
  { id: 'jashn', name: 'Jashn', label: 'Modern festivities', colors: ['#6f356a', '#ef8354'], symbol: 'जश्न' },
  { id: 'griha', name: 'Griha', label: 'Warm new beginnings', colors: ['#b35432', '#e8bd69'], symbol: 'ॐ' },
]

const users = [
  {
    id: 'user-host', name: 'Meera Khanna', firstName: 'Meera', email: 'meera@shagun.demo',
    phone: '+91 98101 44021', avatar: 'MK', city: 'New Delhi', demoLabel: 'Host only',
  },
  {
    id: 'user-guest', name: 'Zoya Siddiqui', firstName: 'Zoya', email: 'zoya@shagun.demo',
    phone: '+91 99204 71320', avatar: 'ZS', city: 'Mumbai', demoLabel: 'Guest only',
  },
  {
    id: 'user-both', name: 'Arjun Malhotra', firstName: 'Arjun', email: 'arjun@shagun.demo',
    phone: '+91 98715 88320', avatar: 'AM', city: 'Gurugram', demoLabel: 'Host + guest',
  },
  {
    id: 'user-family', name: 'Kavya Malhotra', firstName: 'Kavya', email: 'kavya@shagun.demo',
    phone: '+91 99104 22618', avatar: 'KM', city: 'Gurugram', demoLabel: null,
  },
]

const events = [
  {
    id: 'event-khanna-wedding', ownerId: 'user-host', name: 'Aditi & Rohan', type: 'Wedding',
    headline: 'Together with their families, Aditi & Rohan invite you to celebrate their wedding',
    description: 'Two hearts, two families, and a lifetime of new beginnings. Join us for a joyful weekend of music, mehndi and wedding traditions.',
    templateId: 'shaadi', status: 'active', startDate: '2026-12-12', endDate: '2026-12-13',
    coverTone: 'rose', contactName: 'Meera Khanna', contactPhone: '+91 98101 44021',
    publicCode: 'ADITI-ROHAN', menuEnabled: true, createdAt: '2026-09-18T10:30:00.000Z',
    paymentAccount: { receiver: 'Meera Khanna', upiId: 'meera.khanna@upi', phone: '+91 98101 44021', locked: true },
  },
  {
    id: 'event-arjun-housewarming', ownerId: 'user-both', name: 'Malhotra Griha Pravesh', type: 'Housewarming',
    headline: 'A new address, a new chapter, and the same warm welcome',
    description: 'Please join Arjun and Kavya for a small pooja followed by brunch as we make our new house a home.',
    templateId: 'griha', status: 'active', startDate: '2026-11-22', endDate: '2026-11-22',
    coverTone: 'saffron', contactName: 'Arjun Malhotra', contactPhone: '+91 98715 88320',
    publicCode: 'HOME-2211', menuEnabled: true, createdAt: '2026-10-02T08:15:00.000Z',
    paymentAccount: { receiver: 'Arjun Malhotra', upiId: 'arjun.malhotra@upi', phone: '+91 98715 88320', locked: true },
  },
  {
    id: 'event-noor-reception', ownerId: 'user-family', name: 'Sara & Rehan', type: 'Reception',
    headline: 'An evening of light, love and laughter',
    description: 'The Siddiqui and Mirza families request the pleasure of your company at the reception of Sara and Rehan.',
    templateId: 'noor', status: 'active', startDate: '2027-01-17', endDate: '2027-01-17',
    coverTone: 'navy', contactName: 'Kavya Malhotra', contactPhone: '+91 99104 22618',
    publicCode: 'NOOR-1701', menuEnabled: true, createdAt: '2026-10-11T12:00:00.000Z',
    paymentAccount: { receiver: 'Kavya Malhotra', upiId: 'kavya.m@upi', phone: '+91 99104 22618', locked: true },
  },
]

const eventFunctions = [
  { id: 'fn-sangeet', eventId: 'event-khanna-wedding', name: 'Sangeet Under the Stars', date: '2026-12-12', time: '19:00', venue: 'The Roseate', address: 'NH-8, Samalkha, New Delhi', icon: 'music' },
  { id: 'fn-wedding', eventId: 'event-khanna-wedding', name: 'Wedding Ceremony', date: '2026-12-13', time: '17:30', venue: 'The Roseate', address: 'NH-8, Samalkha, New Delhi', icon: 'sparkles' },
  { id: 'fn-pooja', eventId: 'event-arjun-housewarming', name: 'Griha Pravesh Pooja', date: '2026-11-22', time: '09:30', venue: 'Malhotra Residence', address: '27A Camellias Lane, Gurugram', icon: 'home' },
  { id: 'fn-brunch', eventId: 'event-arjun-housewarming', name: 'Celebration Brunch', date: '2026-11-22', time: '11:30', venue: 'The Courtyard', address: '27A Camellias Lane, Gurugram', icon: 'utensils' },
  { id: 'fn-reception', eventId: 'event-noor-reception', name: 'Reception Dinner', date: '2027-01-17', time: '19:30', venue: 'Taj Lands End', address: 'Bandstand, Bandra West, Mumbai', icon: 'moon' },
]

const guestGroups = [
  { id: 'group-sharma', eventId: 'event-khanna-wedding', name: 'Sharma Family', capacity: 4 },
  { id: 'group-siddiqui', eventId: 'event-khanna-wedding', name: 'Siddiqui Family', capacity: 3 },
  { id: 'group-colleagues', eventId: 'event-arjun-housewarming', name: 'Work friends', capacity: 8 },
]

const guests = [
  { id: 'guest-arjun', eventId: 'event-khanna-wedding', userId: 'user-both', groupId: null, name: 'Arjun Malhotra', phone: '+91 98715 88320', email: 'arjun@shagun.demo', invitedCount: 2, functionIds: ['fn-sangeet', 'fn-wedding'], inviteStatus: 'opened', rsvp: 'yes', attending: 2, shagunStatus: 'verified' },
  { id: 'guest-zoya', eventId: 'event-khanna-wedding', userId: 'user-guest', groupId: 'group-siddiqui', name: 'Zoya Siddiqui', phone: '+91 99204 71320', email: 'zoya@shagun.demo', invitedCount: 3, functionIds: ['fn-wedding'], inviteStatus: 'opened', rsvp: 'maybe', attending: 2, shagunStatus: 'pending' },
  { id: 'guest-vikram', eventId: 'event-khanna-wedding', userId: null, groupId: 'group-sharma', name: 'Vikram Sharma', phone: '+91 98112 90018', email: 'vikram@example.com', invitedCount: 4, functionIds: ['fn-sangeet', 'fn-wedding'], inviteStatus: 'sent', rsvp: 'pending', attending: 0, shagunStatus: 'none' },
  { id: 'guest-tara', eventId: 'event-khanna-wedding', userId: null, groupId: null, name: 'Tara Bedi', phone: '+91 99119 73114', email: '', invitedCount: 1, functionIds: ['fn-sangeet'], inviteStatus: 'delivered', rsvp: 'no', attending: 0, shagunStatus: 'none' },
  { id: 'guest-naina', eventId: 'event-khanna-wedding', userId: null, groupId: null, name: 'Naina Kapoor', phone: '+91 98996 51207', email: 'naina@example.com', invitedCount: 2, functionIds: ['fn-wedding'], inviteStatus: 'opened', rsvp: 'yes', attending: 2, shagunStatus: 'cash' },
  { id: 'guest-meera-home', eventId: 'event-arjun-housewarming', userId: 'user-host', groupId: null, name: 'Meera Khanna', phone: '+91 98101 44021', email: 'meera@shagun.demo', invitedCount: 2, functionIds: ['fn-pooja', 'fn-brunch'], inviteStatus: 'opened', rsvp: 'yes', attending: 2, shagunStatus: 'none' },
  { id: 'guest-rohit-home', eventId: 'event-arjun-housewarming', userId: null, groupId: 'group-colleagues', name: 'Rohit Basu', phone: '+91 98733 41091', email: 'rohit@example.com', invitedCount: 1, functionIds: ['fn-brunch'], inviteStatus: 'sent', rsvp: 'pending', attending: 0, shagunStatus: 'none' },
  { id: 'guest-zoya-noor', eventId: 'event-noor-reception', userId: 'user-guest', groupId: null, name: 'Zoya Siddiqui', phone: '+91 99204 71320', email: 'zoya@shagun.demo', invitedCount: 2, functionIds: ['fn-reception'], inviteStatus: 'opened', rsvp: 'yes', attending: 2, shagunStatus: 'verified' },
  { id: 'guest-arjun-noor', eventId: 'event-noor-reception', userId: 'user-both', groupId: null, name: 'Arjun Malhotra', phone: '+91 98715 88320', email: 'arjun@shagun.demo', invitedCount: 1, functionIds: ['fn-reception'], inviteStatus: 'delivered', rsvp: 'pending', attending: 0, shagunStatus: 'none' },
]

const invitations = [
  { id: 'invite-arjun-khanna', eventId: 'event-khanna-wedding', guestId: 'guest-arjun', token: 'arjun-7KQ4', isPrivate: true, sentAt: '2026-10-12T10:00:00.000Z', openedAt: '2026-10-12T10:14:00.000Z' },
  { id: 'invite-zoya-khanna', eventId: 'event-khanna-wedding', guestId: 'guest-zoya', token: 'zoya-2PL8', isPrivate: true, sentAt: '2026-10-13T11:00:00.000Z', openedAt: '2026-10-13T14:32:00.000Z' },
  { id: 'invite-vikram-khanna', eventId: 'event-khanna-wedding', guestId: 'guest-vikram', token: 'sharma-F4M9', isPrivate: true, sentAt: '2026-10-15T09:00:00.000Z', openedAt: null },
  { id: 'invite-tara-khanna', eventId: 'event-khanna-wedding', guestId: 'guest-tara', token: 'tara-1HT6', isPrivate: true, sentAt: '2026-10-16T15:00:00.000Z', openedAt: null },
  { id: 'invite-naina-khanna', eventId: 'event-khanna-wedding', guestId: 'guest-naina', token: 'naina-8BV2', isPrivate: true, sentAt: '2026-10-18T13:00:00.000Z', openedAt: '2026-10-20T08:00:00.000Z' },
  { id: 'invite-meera-home', eventId: 'event-arjun-housewarming', guestId: 'guest-meera-home', token: 'meera-home-5DW1', isPrivate: true, sentAt: '2026-10-20T07:30:00.000Z', openedAt: '2026-10-20T08:02:00.000Z' },
  { id: 'invite-rohit-home', eventId: 'event-arjun-housewarming', guestId: 'guest-rohit-home', token: 'rohit-home-3CX7', isPrivate: true, sentAt: '2026-10-21T12:00:00.000Z', openedAt: null },
  { id: 'invite-zoya-noor', eventId: 'event-noor-reception', guestId: 'guest-zoya-noor', token: 'zoya-noor-6NB9', isPrivate: true, sentAt: '2026-10-24T10:00:00.000Z', openedAt: '2026-10-24T11:08:00.000Z' },
  { id: 'invite-arjun-noor', eventId: 'event-noor-reception', guestId: 'guest-arjun-noor', token: 'arjun-noor-9QZ3', isPrivate: true, sentAt: '2026-10-25T09:45:00.000Z', openedAt: null },
  { id: 'invite-public-khanna', eventId: 'event-khanna-wedding', guestId: null, token: 'ADITI-ROHAN', isPrivate: false, sentAt: null, openedAt: null },
]

const transactions = [
  { id: 'txn-arjun-2101', eventId: 'event-khanna-wedding', invitationId: 'invite-arjun-khanna', senderUserId: 'user-both', senderName: 'Arjun Malhotra', senderContact: '+91 98715 88320', receiverUserId: 'user-host', amount: 2101, method: 'UPI', status: 'verified', reference: 'DEMO-UPI-824031', blessing: 'To a lifetime of laughter, friendship and beautiful adventures.', createdAt: '2026-10-18T13:24:00.000Z', isDemo: true },
  { id: 'txn-zoya-1101', eventId: 'event-khanna-wedding', invitationId: 'invite-zoya-khanna', senderUserId: 'user-guest', senderName: 'Zoya Siddiqui', senderContact: '+91 99204 71320', receiverUserId: 'user-host', amount: 1101, method: 'UPI', status: 'pending', reference: 'DEMO-UPI-913750', blessing: 'May every day together be brighter than the last.', createdAt: '2026-10-26T09:12:00.000Z', isDemo: true },
  { id: 'txn-naina-cash', eventId: 'event-khanna-wedding', invitationId: 'invite-naina-khanna', senderUserId: null, senderName: 'Naina Kapoor', senderContact: '+91 98996 51207', receiverUserId: 'user-host', amount: 5101, method: 'Cash', status: 'reported', reference: 'CASH-REC-104', blessing: 'With love from the Kapoor family.', createdAt: '2026-10-27T18:40:00.000Z', isDemo: false },
  { id: 'txn-zoya-noor', eventId: 'event-noor-reception', invitationId: 'invite-zoya-noor', senderUserId: 'user-guest', senderName: 'Zoya Siddiqui', senderContact: '+91 99204 71320', receiverUserId: 'user-family', amount: 501, method: 'UPI', status: 'verified', reference: 'DEMO-UPI-340882', blessing: 'Mubarak! Wishing you a beautiful life together.', createdAt: '2026-10-28T16:12:00.000Z', isDemo: true },
]

const menus = [
  { id: 'menu-khanna', eventId: 'event-khanna-wedding', caterer: 'Saffron & Sage', contact: '+91 98100 22331', imageName: '', enabled: true },
  { id: 'menu-home', eventId: 'event-arjun-housewarming', caterer: 'The Courtyard Kitchen', contact: '+91 98211 67544', imageName: '', enabled: true },
  { id: 'menu-noor', eventId: 'event-noor-reception', caterer: 'Dastarkhwan Co.', contact: '+91 98670 11284', imageName: '', enabled: true },
]

const menuItems = [
  { id: 'item-1', menuId: 'menu-khanna', name: 'Dahi ke Kebab', category: 'Starters', dietary: 'veg', description: 'Hung curd, roasted peppers and mint chutney' },
  { id: 'item-2', menuId: 'menu-khanna', name: 'Tandoori Broccoli', category: 'Starters', dietary: 'veg', description: 'Charred broccoli with mustard cream' },
  { id: 'item-3', menuId: 'menu-khanna', name: 'Murgh Malai Tikka', category: 'Starters', dietary: 'non-veg', description: 'Creamy chicken tikka from the clay oven' },
  { id: 'item-4', menuId: 'menu-khanna', name: 'Dal Bukhara', category: 'Mains', dietary: 'veg', description: 'Slow-cooked black lentils, butter and tomato' },
  { id: 'item-5', menuId: 'menu-khanna', name: 'Nalli Nihari', category: 'Mains', dietary: 'non-veg', description: 'Old Delhi style lamb shank curry' },
  { id: 'item-6', menuId: 'menu-khanna', name: 'Rose & Pistachio Kulfi', category: 'Desserts', dietary: 'veg', description: 'Hand-churned festive kulfi' },
  { id: 'item-7', menuId: 'menu-home', name: 'Bedmi Puri & Aloo', category: 'Brunch', dietary: 'veg', description: 'Crisp lentil puri with spiced potato curry' },
  { id: 'item-8', menuId: 'menu-home', name: 'Masala Chai', category: 'Beverages', dietary: 'beverage', description: 'Fresh ginger, cardamom and Assam tea' },
  { id: 'item-9', menuId: 'menu-home', name: 'Jalebi Rabri', category: 'Desserts', dietary: 'veg', description: 'Warm jalebi with saffron rabri' },
  { id: 'item-10', menuId: 'menu-noor', name: 'Galouti Kebab', category: 'Starters', dietary: 'non-veg', description: 'Lucknowi lamb kebabs with ulte tawe ka paratha' },
  { id: 'item-11', menuId: 'menu-noor', name: 'Subz Biryani', category: 'Mains', dietary: 'veg', description: 'Dum-cooked basmati, vegetables and saffron' },
]

const cohosts = [
  { id: 'cohost-kavya', eventId: 'event-arjun-housewarming', userId: 'user-family', name: 'Kavya Malhotra', email: 'kavya@shagun.demo', status: 'active', permissions: { guests: true, sharing: true, rsvps: true, menu: true, shagun: false, payments: false } },
  { id: 'cohost-arjun-khanna', eventId: 'event-khanna-wedding', userId: 'user-both', name: 'Arjun Malhotra', email: 'arjun@shagun.demo', status: 'active', permissions: { guests: false, sharing: true, rsvps: true, menu: false, shagun: false, payments: false } },
]

const notifications = [
  { id: 'note-1', userId: 'user-host', type: 'rsvp', title: 'RSVP updated', body: 'Arjun Malhotra confirmed 2 guests for Aditi & Rohan.', createdAt: '2026-10-29T14:30:00.000Z', read: false },
  { id: 'note-2', userId: 'user-host', type: 'payment', title: 'Shagun reported', body: 'A new simulated UPI payment of ₹1,101 is pending review.', createdAt: '2026-10-28T09:10:00.000Z', read: false },
  { id: 'note-3', userId: 'user-both', type: 'invite', title: 'New invitation', body: 'You are invited to Sara & Rehan’s reception.', createdAt: '2026-10-25T09:45:00.000Z', read: true },
  { id: 'note-4', userId: 'user-guest', type: 'payment', title: 'Payment recorded', body: 'Your demo Shagun for Sara & Rehan is marked verified.', createdAt: '2026-10-28T16:14:00.000Z', read: false },
]

export const createSeedState = () => ({
  version: 1,
  users,
  events,
  eventFunctions,
  cohosts,
  guests,
  guestGroups,
  invitations,
  transactions,
  menus,
  menuItems,
  notifications,
})

export const demoAccounts = [
  { id: 'user-host', title: 'Host only', subtitle: 'Owns Aditi & Rohan’s wedding', tone: 'gold' },
  { id: 'user-guest', title: 'Guest only', subtitle: 'Invited to two celebrations', tone: 'plum' },
  { id: 'user-both', title: 'Host + guest', subtitle: 'Owns an event and attends others', tone: 'teal' },
]

export function makeId(prefix = 'id') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

export function formatMoney(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(amount || 0))
}

export function formatDate(value, options = {}) {
  if (!value) return 'Date to be announced'
  const date = String(value).includes('T') ? new Date(value) : new Date(`${value}T12:00:00`)
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', ...options }).format(date)
}

export function getInvitationUrl(token) {
  return `${window.location.origin}${window.location.pathname}#/invitation/${token}`
}
