function pyramid(char, nb) {
    let str = "";
    const totalWidth = (2 * nb - 1) * char.length; 
  
    for (let i = 0; i < nb; i++) {
      const charCount = 2 * i + 1; 
      const lineWidth = charCount * char.length;
      const spacesCount = (totalWidth - lineWidth) / 2;
  
      str += " ".repeat(spacesCount) + char.repeat(charCount);
      if (i < nb - 1) str += "\n";
    }
    return str;
  }
  
  console.log(pyramid('{}', 12))
