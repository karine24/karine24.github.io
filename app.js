function redirect() {
    const textoPesquisa = document.getElementById('search_text').value;
    window.location.href="pesquisa.html?search=" + textoPesquisa;
}