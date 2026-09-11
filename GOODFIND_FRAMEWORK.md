# GOOD FIND WEAR — CONTENT FRAMEWORK

**Version:** 1.1  
**Status:** Active  
**Purpose:** Single source of truth for Good Find Wear content production, verification, delivery, affiliate handling, approval, landing-page updates, and live deployment verification.

---

## 1. CORE WORKFLOW

Every Good Find Wear post MUST follow this order:

**PRODUCT FIRST → VERIFY → DESIGN → DETAILS → AFFILIATE → APPROVED → LANDING PAGE → LIVE VERIFY**

Never start from an AI-generated outfit and then search for similar products afterward.

The exact product comes first. The visual concept must adapt to the verified products.

---

## 2. PRODUCT FIRST

Before deciding the final concept or visual direction:

1. Search Shopee for the actual products.
2. Prioritize Shopee Affiliate-compatible listings and trusted sellers:
   - Shopee Mall
   - Star+
   - Star Seller
   - Supermarket / Toko Populer
3. Build the outfit from products that can actually be purchased from the selected listings.
4. Do not select a product merely because it looks good in an AI concept.

### Product selection principle

**If the product cannot be verified and represented accurately, it is not a locked product.**

If a product does not work with the intended concept or visual, change the concept or find another product.

---

## 3. VERIFY — HARD REQUIREMENT

Every item must be verified against the exact Shopee listing that will be linked.

Verify all of the following:

- Exact model / product
- Exact color
- Exact gender / fit
- Exact type / variant
- Product photos match
- Listing price matches the selected product/variant at the time checked
- Gender/fit of shoes, bags, accessories, and other items is appropriate

### Gender rules

- Male model → Men's or Unisex product.
- Female model → Women's or Unisex product.
- Shoes, bags, accessories → verify the exact applicable gender/fit/type where relevant.

### 1:1 VISUAL RULE — HARD RULE

**The product shown in the design must be the exact verified product. No substitutions. No lookalikes. No approximate products.**

The design must faithfully represent visible product characteristics including, where applicable:

- silhouette
- cut / fit
- color
- collar
- sleeves
- pockets
- zippers
- buttons
- seams / panels
- logos / branding
- hardware
- sole shape
- material appearance
- distinctive details
- product proportions

AI-generated imagery must not invent a different version of the product.

### If exact representation is not possible

**Change the visual/design or replace the product. Never change the product into a similar-looking item merely to make the visual work.**

This rule exists specifically to prevent the GF001/GF002 trial error from recurring.

### Price rule

Prices may change because of promotions, vouchers, seller pricing, or time.

- Small price changes may be noted as: **“Price may change.”**
- Never use a price from another product or another variant.
- The landing page must use the verified listing price associated with the approved product/link at the time of update.

---

## 4. DESIGN — LOCKED 5-SLIDE FORMAT

After all main products pass verification, create the 5-slide carousel.

### Slide 1 — LOOK

Must contain:

- 1 complete outfit
- GOODFIND ID
- Look / theme name
- Optional total price

The model must visibly wear the same locked products from the verified listings.

### Slide 2 — BREAKDOWN

Must contain:

- The same model/outfit as Slide 1
- Numbered breakdown **01–05**
- Exact product names
- No prices

Product images/details should correspond to the exact locked products.

### Slide 3 — TODAY PICKS

Must contain:

- 4–6 items
- One coherent theme / shopping context
- Exact products
- Prices

Do not mix unrelated products merely to fill the slide.

### Slide 4 — 3 LOOKS

Must contain:

- 3 outfit variations
- One explicit core item/theme
- Variations must use the verified product(s) faithfully

### Slide 5 — BRAND / LIFESTYLE

Must reinforce Good Find Wear's visual identity and lifestyle positioning.

---

## 5. DESIGN HONESTY

The visual must be honest about the products.

**Product accuracy beats aesthetic perfection.**

Do not allow:

- AI hallucinated product details
- Similar-but-not-identical substitutions
- Wrong colorways
- Wrong model names
- Wrong fit/gender
- Wrong shoe shape
- Wrong bag structure
- Wrong logos/branding
- Generic products standing in for exact products

If the exact product cannot be rendered faithfully, stop and revise the design before delivery.

---

## 6. DELIVERY

After design, delivery MUST include:

1. Actual visual 5-slide storyboard/mockup — not text-only storyboard.
2. Internal product/affiliate curation containing:
   - Normal Shopee product URL
   - Exact product name
   - Seller / seller status
   - Checked price
   - Verification notes

Affiliate YES/NO status is internal only and must never appear on the slides.

---

## 7. DETAILS

When the user asks **“details”** after design delivery, immediately provide:

- Carousel caption
- All normal Shopee product URLs for items appearing in the design
- Exact product names
- Checked listing prices
- Relevant verification notes

### Important

**DETAILS IS NOT APPROVAL.**

The user may revise the caption or design after details are delivered.

Do not update the landing page merely because details were requested.

---

## 8. AFFILIATE

The user converts normal Shopee product URLs into Shopee Affiliate links through their own Shopee Affiliate account.

The assistant must:

- Use normal Shopee URLs for product curation/details.
- Never fabricate affiliate links.
- Never modify a Shopee URL into an affiliate URL.
- Never claim a normal URL is an affiliate link.

---

## 9. APPROVED

Approval happens ONLY when the user explicitly says something equivalent to:

- “approved”
- “oke”
- “gas”
- another explicit approval statement

A request for details, feedback, or a revision is NOT approval.

After approval, wait for / use the user's confirmed affiliate links for the landing-page update.

---

## 10. LANDING PAGE

Only after:

1. User explicitly approves the content, AND
2. Affiliate links are supplied / confirmed,

update the Good Find Wear landing page repository.

For each GOODFIND ID, store/update:

- Look name / theme
- Exact 5-item breakdown
- Exact verified prices
- User-provided affiliate links

**Never update the landing page before approval.**

### 10.1 LIVE LANDING-PAGE VERIFICATION — HARD REQUIREMENT

A GitHub commit is **not** considered a completed landing-page update by itself.

After every landing-page change:

1. Confirm the deployed/live landing page is serving the updated version.
2. Open the actual public landing-page URL, not only the GitHub file view.
3. Verify the expected GOODFIND ID appears in the rendered page.
4. Verify the look name/theme and all 5 item entries match the approved repository data.
5. Open/check the rendered item links and confirm they point to the confirmed user-provided affiliate links.
6. If cache-busting/versioning is used, increment the asset version when necessary and verify the live page again.
7. If the live page still shows an older version, **do not report the update as complete**. Diagnose the deployment/cache/path issue first.
8. Record the result internally as either:
   - **LIVE VERIFIED** — public page matches repository data.
   - **NOT LIVE / NEEDS FIX** — repository is updated but public page has not updated yet.

### Deployment-path rule

Before editing landing-page data, identify which file/path the live `index.html` actually loads. If there are duplicate files (for example root `script.js` and `landing-page/script.js`), update the file used by the deployed page or explicitly synchronize both when the project structure requires it.

**Never assume that a successful GitHub commit means the public landing page has updated.**

---

## 11. GOODFIND ID MANAGEMENT

Each content package must have a unique GOODFIND ID.

When revising an existing ID:

- If the user says to replace/cancel the previous concept, treat the new concept as the active version of that ID.
- Do not preserve obsolete product selections in the active landing-page data.
- Keep the latest approved product set as the source of truth.

---

## 12. QUALITY CONTROL — FINAL CHECKLIST

Before delivery, confirm:

### PRODUCT
- [ ] Products selected from Shopee first
- [ ] Trusted seller prioritized
- [ ] Exact listing identified

### VERIFY
- [ ] Exact model/product
- [ ] Exact color
- [ ] Exact gender/fit
- [ ] Exact type/variant
- [ ] Product photo matches
- [ ] Price belongs to the exact listing/variant

### VISUAL
- [ ] Model wears the exact products
- [ ] No lookalike substitutions
- [ ] No hallucinated product details
- [ ] Colors and silhouettes match
- [ ] Visible branding/details match
- [ ] Slide 1 and Slide 2 show the same outfit

### FORMAT
- [ ] 5 slides
- [ ] Slide 1 = LOOK
- [ ] Slide 2 = BREAKDOWN, no prices
- [ ] Slide 3 = TODAY PICKS, with prices
- [ ] Slide 4 = 3 LOOKS
- [ ] Slide 5 = BRAND/LIFESTYLE

### DELIVERY
- [ ] Actual visual mockup delivered
- [ ] Normal Shopee URLs included internally
- [ ] Exact names included
- [ ] Seller/status included
- [ ] Checked prices included
- [ ] Verification notes included

### APPROVAL / LANDING PAGE
- [ ] Details not treated as approval
- [ ] Explicit approval received
- [ ] Affiliate links supplied/confirmed
- [ ] Landing page updated only after both conditions
- [ ] Correct deployed file/path identified
- [ ] Public landing-page URL checked after update
- [ ] Expected GOODFIND ID visible on the live page
- [ ] Look/theme and all 5 items match repository data
- [ ] Live item links match confirmed affiliate links
- [ ] Cache/deployment issue resolved if stale content appears
- [ ] Final status recorded as LIVE VERIFIED or NOT LIVE / NEEDS FIX

---

## 13. NON-NEGOTIABLE RULE

> **PRODUCT FIRST. VERIFY EXACTLY. DESIGN HONESTLY. NEVER SUBSTITUTE. VERIFY LIVE.**
>
> If there is any conflict between the visual concept and the exact product, the exact product wins.
>
> A landing-page commit is incomplete until the public landing page has been checked and the expected update is visible.
