function friends() {
    let drug1 = document.getElementById('drug1').value
    let drug2 = document.getElementById('drug2').value
    let drug3 = document.getElementById('drug3').value
    let drug4 = document.getElementById('drug4').value
    let drug5 = document.getElementById('drug5').value
    document.getElementById('result').innerText = `У меня есть друзья - ${drug1},${drug2},${drug3},${drug4},${drug5}`
}