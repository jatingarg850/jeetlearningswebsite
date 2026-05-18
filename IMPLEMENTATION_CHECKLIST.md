# Implementation Checklist - Translation System

## Phase 1: Setup ✅

- [ ] **Install Ollama**
  - [ ] Download from https://ollama.ai
  - [ ] Or use: `brew install ollama` (macOS)
  - [ ] Or use: `curl https://ollama.ai/install.sh | sh` (Linux)
  - [ ] Verify installation: `ollama --version`

- [ ] **Start Ollama Server**
  - [ ] Run: `ollama serve`
  - [ ] Verify: `curl http://localhost:11434/api/tags`
  - [ ] Keep running in background

- [ ] **Pull Translation Model**
  - [ ] Run: `ollama pull translategemma:4b`
  - [ ] Wait for download (~2.5GB)
  - [ ] Verify: `ollama list`

## Phase 2: Translation ✅

- [ ] **Run Batch Translation**
  - [ ] Run: `node scripts/batchTranslateCareerData.mjs`
  - [ ] Monitor progress in console
  - [ ] Wait for completion (~15-20 minutes)
  - [ ] Check for errors

- [ ] **Verify Translations**
  - [ ] Run: `node scripts/verifyTranslations.mjs`
  - [ ] Check completion percentage
  - [ ] Review any missing translations
  - [ ] Note any issues

- [ ] **Review Updated Files**
  - [ ] Check `app/data/agricultureUpdateData.ts`
  - [ ] Verify `titleHi`, `descriptionHi`, `contentHi` fields
  - [ ] Spot-check Hindi text quality
  - [ ] Look for any encoding issues

## Phase 3: Component Updates ✅

- [ ] **Update Components to Use Hook**
  - [ ] Import `useInlineTranslations` hook
  - [ ] Replace hardcoded English with hook methods
  - [ ] Use `getString()` for single strings
  - [ ] Use `getArray()` for arrays
  - [ ] Test each component

- [ ] **Test Language Switching**
  - [ ] Switch to Hindi in UI
  - [ ] Verify Hindi text displays
  - [ ] Check text alignment (RTL if needed)
  - [ ] Verify no encoding issues
  - [ ] Switch back to English
  - [ ] Verify English text displays

- [ ] **Components to Update**
  - [ ] `app/components/CareerCompleteGuide.tsx`
  - [ ] `app/[category]/CategoryClient.tsx`
  - [ ] `app/[category]/[career]/CareerPageClientNew.tsx`
  - [ ] Other career display components
  - [ ] Test each one

## Phase 4: Testing ✅

- [ ] **Unit Tests**
  - [ ] Test `useInlineTranslations` hook
  - [ ] Test `getString()` method
  - [ ] Test `getArray()` method
  - [ ] Test language switching

- [ ] **Integration Tests**
  - [ ] Test career page with Hindi
  - [ ] Test category page with Hindi
  - [ ] Test all career sections
  - [ ] Test language persistence

- [ ] **Manual Testing**
  - [ ] Open app in browser
  - [ ] Navigate to career pages
  - [ ] Switch to Hindi
  - [ ] Verify all text displays correctly
  - [ ] Check mobile responsiveness
  - [ ] Test on different browsers

- [ ] **Performance Testing**
  - [ ] Check page load time
  - [ ] Verify no API calls for translation
  - [ ] Check memory usage
  - [ ] Verify cache is working

## Phase 5: Deployment ✅

- [ ] **Code Review**
  - [ ] Review all changes
  - [ ] Check for console errors
  - [ ] Verify no breaking changes
  - [ ] Check TypeScript types

- [ ] **Git Commit**
  - [ ] Stage files: `git add app/data/ app/hooks/`
  - [ ] Commit: `git commit -m "Add Hindi translations to all career data"`
  - [ ] Push: `git push origin feature/hindi-translations`

- [ ] **Create Pull Request**
  - [ ] Create PR on GitHub/GitLab
  - [ ] Add description of changes
  - [ ] Link to documentation
  - [ ] Request review

- [ ] **Merge to Main**
  - [ ] Get approval from team
  - [ ] Merge PR
  - [ ] Delete feature branch
  - [ ] Verify main branch

- [ ] **Deploy to Production**
  - [ ] Build: `npm run build`
  - [ ] Deploy to staging
  - [ ] Test in staging
  - [ ] Deploy to production
  - [ ] Monitor for errors

## Phase 6: Monitoring ✅

- [ ] **Monitor Performance**
  - [ ] Check page load times
  - [ ] Monitor error logs
  - [ ] Check user feedback
  - [ ] Verify translations display correctly

- [ ] **Gather Feedback**
  - [ ] Ask users about translation quality
  - [ ] Check for any issues
  - [ ] Note any improvements needed
  - [ ] Plan for future updates

- [ ] **Documentation**
  - [ ] Update README with translation info
  - [ ] Document how to use the hook
  - [ ] Add examples to code comments
  - [ ] Create user guide for Hindi

## Phase 7: Optimization (Optional) ✅

- [ ] **Performance Optimization**
  - [ ] Profile component rendering
  - [ ] Optimize re-renders
  - [ ] Check bundle size
  - [ ] Minimize data file sizes

- [ ] **Translation Quality**
  - [ ] Review any problematic translations
  - [ ] Consider manual corrections
  - [ ] Update translation model if needed
  - [ ] Re-run batch translation if improved

- [ ] **Extend to Other Languages**
  - [ ] Plan for additional languages
  - [ ] Create scripts for other languages
  - [ ] Test with new languages
  - [ ] Deploy when ready

## Quick Reference

### Commands

```bash
# Start Ollama
ollama serve

# Pull model
ollama pull translategemma:4b

# Run translation
node scripts/batchTranslateCareerData.mjs

# Verify translations
node scripts/verifyTranslations.mjs

# Build project
npm run build

# Start dev server
npm run dev

# Run tests
npm run test
```

### Files to Review

- `QUICK_START_TRANSLATION.md` - Quick start guide
- `TRANSLATION_SCRIPTS_README.md` - Comprehensive guide
- `BATCH_TRANSLATION_GUIDE.md` - Detailed guide
- `TRANSLATION_SYSTEM_COMPLETE.md` - System overview
- `app/hooks/useInlineTranslations.ts` - Translation hook
- `scripts/batchTranslateCareerData.mjs` - Main script

### Key Files Modified

- `app/data/*UpdateData.ts` - All career data files
- `app/hooks/useInlineTranslations.ts` - New hook
- Components using career data

## Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Setup | 30 min | ⏳ |
| Translation | 20 min | ⏳ |
| Component Updates | 2-3 hours | ⏳ |
| Testing | 2-3 hours | ⏳ |
| Deployment | 1-2 hours | ⏳ |
| Monitoring | Ongoing | ⏳ |
| Optimization | Optional | ⏳ |

**Total Time**: ~8-10 hours

## Success Criteria

- ✅ All career data files have Hindi translations
- ✅ Components use `useInlineTranslations` hook
- ✅ Language switching works correctly
- ✅ Hindi text displays properly
- ✅ No console errors
- ✅ Performance is good (no API calls)
- ✅ Tests pass
- ✅ Code review approved
- ✅ Deployed to production
- ✅ Users can switch to Hindi

## Troubleshooting

### If Translation Fails
1. Check Ollama is running: `ollama serve`
2. Verify model: `ollama list`
3. Re-pull model: `ollama pull translategemma:4b`
4. Check file permissions: `ls -la app/data/`
5. Run verification: `node scripts/verifyTranslations.mjs`

### If Components Don't Update
1. Clear browser cache
2. Restart dev server: `npm run dev`
3. Check console for errors
4. Verify hook is imported correctly
5. Check TypeScript types

### If Hindi Text Doesn't Display
1. Check encoding: UTF-8
2. Verify font supports Devanagari
3. Check CSS for text direction
4. Test in different browser
5. Check console for errors

## Notes

- Keep Ollama running during translation
- Translation takes ~15-20 minutes for all files
- Cache improves performance on subsequent runs
- Always verify translations before deploying
- Test language switching thoroughly
- Monitor performance after deployment

## Sign-Off

- [ ] Phase 1 Complete: _____ (Date)
- [ ] Phase 2 Complete: _____ (Date)
- [ ] Phase 3 Complete: _____ (Date)
- [ ] Phase 4 Complete: _____ (Date)
- [ ] Phase 5 Complete: _____ (Date)
- [ ] Phase 6 Complete: _____ (Date)
- [ ] Phase 7 Complete: _____ (Date)

---

**Status**: Ready to Start
**Last Updated**: May 16, 2026
**Estimated Duration**: 8-10 hours
