function scrollElementToIdMinusHeight(elementId: string, minusHeight: number): void {
  const element = document.getElementById(elementId);

  if (element) {
    const offset = element.offsetTop - minusHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

export default scrollElementToIdMinusHeight;