import React, { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-http-40e28-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
        ).then(response => response.json())
        .then(data => {
            const meals = [];
            for(const key in data) {
                const meal = {
                    id: key,
                    ...data[key]
                };
                meals.push(meal);
            }
            setLoadedMeals(meals);
        });
    }, []);

    let mealsList = <li>No Data</li>;
    if (loadedMeals.length > 0) {
        mealsList = loadedMeals.map(meal =>
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />);
    }
    
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;