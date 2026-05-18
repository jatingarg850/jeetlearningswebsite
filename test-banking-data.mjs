import { bankingAndFinanceUpdateData } from './app/data/bankingAndFinanceUpdateData.ts';

console.log('Banking data keys:', Object.keys(bankingAndFinanceUpdateData));
console.log('Has banking_and_related_services:', 'banking_and_related_services' in bankingAndFinanceUpdateData);

if ('banking_and_related_services' in bankingAndFinanceUpdateData) {
  const data = bankingAndFinanceUpdateData['banking_and_related_services'];
  console.log('Career name:', data.heading);
  console.log('Has guideSections:', !!data.guideSections);
  console.log('Number of guideSections:', data.guideSections?.length || 0);
  console.log('First section:', data.guideSections?.[0]?.title);
}
