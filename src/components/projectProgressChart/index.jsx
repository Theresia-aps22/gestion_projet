import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chart from 'chart.js/auto';


const ProjectProgressChart = () => {
    // Exemple de données de progression
    const progressData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [20, 40, 60, 80], // Pourcentages de progression
    };
    const chartRef = useRef(null);
    const [key, setKey] = useState(0); // Utilisé pour forcer la mise à jour du composant

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: progressData.labels,
                datasets: [
                    {
                        label: 'Progress',
                        data: progressData.data,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        tension: 0.1,
                        fill: true,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date',
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Progress (%)',
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                    },
                },
            },
        });

        return () => {
            chartInstance.destroy();
        };
    }, [progressData, key]);

    const refreshChart = () => {
        // Fonction pour forcer la mise à jour du composant
        setKey(prevKey => prevKey + 1);
    };

    return (
        <Container className="my-4">
            <canvas ref={chartRef} />
            <button className="btn btn-primary custom-button" onClick={refreshChart}>Refresh Chart</button>
        </Container>
    );
};

export default ProjectProgressChart;
