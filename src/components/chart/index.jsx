
export default function Chart(){{
    return(
        <canvas
            data-mdb-chart="line"
            data-mdb-dataset-label="Traffic"
            data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
            data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
        ></canvas>
    )
}}