export default function toUpperCaseFirst(str: string): string {
  let words = str.split(/([\s-]+)/);
  for (let i = 0; i < words.length; i += 2) { 
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}