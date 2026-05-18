#!/bin/bash

# ⚡ Quick Optimization Script
# Runs all optimization steps in sequence

echo "🚀 Starting optimization..."
echo ""

echo "📝 Step 1: Creating fast translation index..."
node scripts/createFastTranslationIndex.mjs
if [ $? -ne 0 ]; then
  echo "❌ Translation indexing failed"
  exit 1
fi
echo ""

echo "📦 Step 2: Optimizing career data..."
node scripts/optimizeCareerData.mjs
if [ $? -ne 0 ]; then
  echo "❌ Career data optimization failed"
  exit 1
fi
echo ""

echo "✨ Optimization complete!"
echo ""
echo "📊 Summary:"
echo "   ✅ Fast translation index created"
echo "   ✅ Career data optimized"
echo ""
echo "🎯 Next steps:"
echo "   1. Update components to use useFastTranslation"
echo "   2. Update career pages to use loadCareerMain/loadCareerComplete"
echo "   3. Run: npm run dev"
echo "   4. Check browser DevTools for performance improvements"
echo ""
echo "📖 See OPTIMIZATION_GUIDE.ts for detailed instructions"
