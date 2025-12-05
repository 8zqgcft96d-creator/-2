// 計算最高分（可能不只一個）
const maxScore = Math.max(...Object.values(scores));
const topTypes = Object.keys(scores).filter(type => scores[type] === maxScore);

// topTypes 可能是 ["馬型"] 或 ["馬型", "男孩型"]
const datasets = topTypes.map(type => ({
    label: type + " 分布",
    data: types.map(t => scores[t]),
    fill: true,
    backgroundColor: "rgba(" + (50 + Math.floor(Math.random()*150)) + ", 100, 200, 0.2)",
    borderColor: "rgba(" + (50 + Math.floor(Math.random()*150)) + ", 100, 200, 1)",
    pointBackgroundColor: "rgba(" + (50 + Math.floor(Math.random()*150)) + ", 100, 200, 1)"
}));

const radarData = {
    labels: types,
    datasets: datasets
};
let html = "<h3>你的主要人格</h3>";

topTypes.forEach(type => {
    html += `
        <div style="margin-bottom:20px; padding:10px; background:#f7f7f7; border-radius:10px;">
            <h4>${type}</h4>
            <p>${explanations[type]}</p>
        </div>
    `;
});

document.getElementById('explanation').innerHTML = html;


result.html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<canvas id="resultChart"></canvas>

<script>
    const ctx = document.getElementById('resultChart');

    const chart = new Chart(ctx, {
        type: 'radar', // bar, pie, radar 任你換
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            datasets: [{
                label: '你的作答分布',
                data: {{ scores|tojson }},  // Flask 後端傳進來的分數
                borderWidth: 2
            }]
        }
    });
</script>
