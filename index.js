const puppeteer = require('puppeteer');
const readLineSync = require('readline-sync');

console.log('Bem-vindo ao Bot conversor');

async function robo() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  const moedaBase = readLineSync.question('Informe uma moeda base:') || 'dolar';
  const moedaFinal = readLineSync.question('Informe uma moeda desejada:') || 'real';
  const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&sca_esv=2fec7fa0447d60ca&sxsrf=ADLYWIL9ujtqDole0MOLO0gvisAVQdc5DQ%3A1722393144878&ei=OKKpZtmnNcDM1sQP4aOayQM&ved=0ahUKEwjZo8G8ntCHAxVAppUCHeGRJjkQ4dUDCBA&uact=5&oq=${moedaBase}+para+${moedaFinal}&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2RvbGFyIHBhcmEgcmVhbDIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSN9EULsFWMVDcAF4AJABAJgBpgKgAdoeqgEGMC44LjEwuAEDyAEA-AEBmAIKoALkEcICBRAhGJ8FwgIEECMYJ8ICCBAAGIAEGKIEwgIHECEYoAEYCpgDAIgGAZIHBTAuMi44oAexTg&sclient=gws-wiz-serp`;

  await page.goto(qualquerUrl);

  const resultado = await page.evaluate(() => {
    // Certifique-se de que o seletor CSS está correto e o elemento existe na página
    return document.querySelector('.lWzCpb.a61j6').value
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
  await browser.close(); // Feche o navegador após a execução
}

robo();
