# Shagun — phone-first celebration studio

This React/Vite application is a complete redesign based on the workflow architecture of `Shagun (Copy).html`.

The application uses four synchronized spaces:

1. **Invite** — edit event details, choose one of five designs, configure the receiver, add guests, and share links.
2. **Guest view** — open the animated envelope, view the invitation, RSVP, see the menu, and record simulated Shagun.
3. **Menu** — manage the caterer, printed-menu reference, dishes, categories, and dietary markers.
4. **Shagun** — view the private host ledger and record physical cash separately from digital demo records.

Changes persist in browser `localStorage` and appear immediately across host and guest views.

## Run

```powershell
npm.cmd install
npm.cmd run dev
```

Production build:

```powershell
npm.cmd run build
```

## Live deployment

The `main` branch deploys automatically to GitHub Pages through the included workflow:

`https://harmanjeet415.github.io/Shagun-UI/`

## Prototype boundaries

- Authentication and payment verification require a real backend for production.
- UPI records are explicitly simulated and remain `Pending` unless provided as seeded demo data.
- Raast is represented as a future-ready receiver option; no Raast integration is active.
- Personal links identify invitation records, not verified identities. Production identity linking needs a real OTP provider.
- Menu photographs are represented locally; durable uploads require object storage.
