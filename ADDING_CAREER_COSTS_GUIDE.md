# Guide: Adding Individual Career Costs

## Quick Start

To add individual costs for a career, follow these steps:

### Step 1: Identify the Career Slug
Find the career slug from `app/data/careers.ts`. For example:
- `actuarial_science`
- `software_engineer`
- `graphic_designer`

### Step 2: Create Cost Data
Add a new export in `app/data/careerIndividualCosting.ts`:

```typescript
export const softwareEngineerCosts: CareerCostData = {
  career: "software_engineer",
  category: "information_technology",
  costs: [
    {
      category: "Government Engineering Colleges",
      amount: "₹50,000-2 Lakh",
      description: "Annual tuition fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "IITs: ₹50,000-1.5 lakh per year",
        "NITs: ₹80,000-2 lakh per year",
      ],
    },
    {
      category: "Programming Tools & Software",
      amount: "₹30,000-60,000",
      description: "One-time investment",
      icon: "💻",
      color: "#3B82F6",
      details: [
        "High-spec Laptop: ₹50,000-1 lakh",
        "IDEs & Tools: ₹10,000-20,000 yearly",
      ],
    },
    {
      category: "Certifications & Courses",
      amount: "₹40,000-1 Lakh",
      description: "Optional certifications",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "AWS/Azure Certification: ₹20,000-40,000",
        "Online Courses: ₹20,000-60,000",
      ],
    },
    {
      category: "Living Expenses",
      amount: "₹15,000-25,000",
      description: "Monthly in major cities",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
      ],
    },
  ],
};
```

### Step 3: Register the Career
Add it to the `allIndividualCareerCosts` record:

```typescript
allIndividualCareerCosts.software_engineer = softwareEngineerCosts;
```

### Step 4: Test
Visit the career page: `http://localhost:3000/information_technology/software_engineer`

The cost breakdown should now display your custom costs instead of the category-level costs.

## Cost Structure Template

Each cost item should have:

| Field | Type | Example |
|-------|------|---------|
| `category` | string | "Government Colleges" |
| `amount` | string | "₹50,000-2 Lakh" |
| `description` | string | "Annual tuition fees" |
| `icon` | string | "🏫" (emoji) |
| `color` | string | "#1E40AF" (hex color) |
| `details` | string[] | ["Detail 1", "Detail 2"] |

## Color Palette Reference

Use these colors for consistency:

```typescript
#1E40AF  // Primary Blue (Government/Education)
#F59E0B  // Amber/Gold (Certifications/Professional)
#3B82F6  // Light Blue (Technology/Tools)
#10B981  // Green (Living/Accommodation)
#6366F1  // Indigo (Exams/Coaching)
#06B6D4  // Cyan (Lab/Research)
#EC4899  // Pink (Creative/Design)
#059669  // Dark Green (Agriculture/Environment)
#0284C7  // Sky Blue (Aviation/Transportation)
#DC2626  // Red (Medical/Security)
#F97316  // Orange (Hospitality)
#7C3AED  // Purple (Legal/Research)
```

## Icon Emoji Reference

Common icons used:

```
🏫 - Government/Education
🏢 - Private Institutions
📚 - Books/Coaching
📜 - Certifications/Exams
💼 - Professional/Business
💻 - Technology/Software
🔬 - Laboratory/Research
📊 - Analytics/Data
🚜 - Agriculture/Equipment
🌱 - Plants/Horticulture
🐝 - Beekeeping
🐟 - Aquaculture
🐔 - Poultry
🌸 - Floristry
🪡 - Sericulture
🌾 - Farming
🏠 - Living/Accommodation
⚕️ - Medical
👔 - Uniforms/Hospitality
🛡️ - Security/Safety
✈️ - Aviation
⚖️ - Legal
🎓 - Education
📱 - Digital/Mobile
📹 - Media/Video
🎨 - Art/Design
```

## Example: Adding Multiple Careers

To add costs for multiple careers efficiently:

```typescript
// Health Science careers
export const dentistCosts: CareerCostData = { /* ... */ };
export const pharmacistCosts: CareerCostData = { /* ... */ };
export const nurseCosts: CareerCostData = { /* ... */ };

// Register all
allIndividualCareerCosts.dentist = dentistCosts;
allIndividualCareerCosts.pharmacist = pharmacistCosts;
allIndividualCareerCosts.nurse_and_medical_assistant = nurseCosts;
```

## Fallback Behavior

If you don't add individual costs for a career:
- The system automatically uses category-level costs
- No errors occur
- Users still see relevant cost information

This means you can gradually add individual costs without breaking anything.

## Bulk Addition Strategy

For adding costs to many careers:

1. **Group by category** - Add all careers from one category together
2. **Use templates** - Copy and modify existing cost structures
3. **Batch test** - Test multiple careers at once
4. **Document changes** - Keep track of which careers have been added

## Common Mistakes to Avoid

❌ **Wrong:** Missing comma after cost item
```typescript
{
  category: "Item 1",
  // ...
},  // ← Don't forget this comma
{
  category: "Item 2",
  // ...
}
```

❌ **Wrong:** Forgetting to register in allIndividualCareerCosts
```typescript
export const myCosts = { /* ... */ };
// Missing: allIndividualCareerCosts.my_career = myCosts;
```

❌ **Wrong:** Using wrong category slug
```typescript
category: "information_technology"  // ✅ Correct
category: "IT"  // ❌ Wrong - must match careers.ts
```

✅ **Right:** Complete structure
```typescript
export const myCareerCosts: CareerCostData = {
  career: "my_career",
  category: "correct_category",
  costs: [
    {
      category: "Cost Type",
      amount: "₹X-Y",
      description: "Description",
      icon: "🎓",
      color: "#HEX",
      details: ["Detail 1", "Detail 2"],
    },
  ],
};

allIndividualCareerCosts.my_career = myCareerCosts;
```

## Verification Checklist

After adding a career:

- [ ] Career slug matches `careers.ts`
- [ ] Category slug matches `careers.ts`
- [ ] All 4 cost items included (or more)
- [ ] Amounts use ₹ symbol and proper format
- [ ] Colors are valid hex codes
- [ ] Icons are valid emojis
- [ ] Details array has 2-4 items
- [ ] Registered in `allIndividualCareerCosts`
- [ ] No TypeScript errors (run `npm run build`)
- [ ] Career page displays costs correctly

## Questions?

Refer to existing implementations:
- `actuarialScienceCosts` - Finance career example
- `bankingServicesCosts` - Banking career example
- `charteredAccountantCosts` - Professional certification example
- `financialAnalystCosts` - Analyst career example
