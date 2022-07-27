export function triggerChatButton(e) {
  e.preventDefault();
  const chatButtonId = document.querySelector('[id*="yii693dr"]').id
  document.getElementById(chatButtonId).click();
}
