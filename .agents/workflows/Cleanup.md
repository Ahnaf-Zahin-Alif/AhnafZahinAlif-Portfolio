# Cleanup
1. Run `npx knip` and `npx depcheck`. List findings, don't delete yet.
2. Find duplicated markup across `src/components/`.
3. Find `"use client"` files that don't need it.
4. Check images in `public/` over 200 KB and any raw `<img>` tags.
5. Run `npm run check`.
6. Present a report, then apply fixes only after I approve.