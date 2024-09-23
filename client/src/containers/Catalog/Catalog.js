import '../../components/Button/Button';
import React, { useState, useEffect } from 'react';

import './Catalog.css';
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import { getAnimals, getAnimalsFiltered } from '../../api/api';
import Loader from '../../components/Loader/Loader';

const typesAnimals = ['Filter by type', 'All types', 'Mammal', 'Bird', 'Fish', 'Reptile'];
const expenses = ['Filter by expense', 'Any expense', '1-5', '5-20', '20-50', '50-100'];

function Catalog() {
    const [items, setItems] = useState([]);
    const [searchData, setSearchData] = useState([]);
    let [curr, setCurr] = useState([]);
    const [value, setValue] = useState('');
    let [filterType, setFilterType] = useState('Filter by type')
    let [filterExpense, setaFilterExpense] = useState('Filter by expense')
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        getAnimals().then((response) => {
            setTimeout(setItems, 800, response.data)
            setSearchData(response.data)
            setTimeout(setLoading, 800, false)
        });
    }, []);

    const filter = () => {
        const filter = {};
        setLoading(true)
        if (filterType !== 'Filter by type' && filterType !== 'All types') {
            //setItems(filterItems);
            //curr = filterItems
            console.log(filterType);
            filter.type = filterType;
        }
        if (filterExpense !== 'Filter by expense' && filterExpense !== 'Any expense') {
            //setItems(filterItems);
            //curr = filterItems
            console.log(filterExpense);
            filter.expense = filterExpense;
        }
        getAnimalsFiltered(filter).then((response) => {
            setItems(response.data)
            setCurr(response.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        const searched = (data) => {
            return data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        }
        if (curr.length == 0) {
            setItems(searched(searchData))
            console.log('not curr')
        }
        else {
            setItems(searched(curr))
            console.log('curr')
        }
    }, [value])

    return (
        <main className='catalog'>
            <div className='catalog__container'>
                <div className='catalog-filter-block'>
                    <div className='catalog__filters'>
                        <select onChange={(e) => setFilterType(e.target.value)} className="select">
                            {
                                typesAnimals.map((type) => <option key={type} value={type}>{type}</option>)
                            }
                        </select>

                        <select onChange={(e) => setaFilterExpense(e.target.value)} className="select">
                            {
                                expenses.map((expense) => <option key={expense} value={expense}>{expense}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <button onClick={filter} className='button'>Apply</button>
                    </div>
                </div>
                <div className='catalog__search'>
                    <input onChange={(e) => setValue(e.target.value)} placeholder='Find item' type='text'></input>
                </div>
                <div on className='catalog-block-with-card'>
                    {loading && <Loader />}
                    {items.map(({ id, name, text, image, daily_expense, anim_type }, idx) => (
                        <CatalogItem
                            id={id}
                            name={name}
                            text={text}
                            image={image}
                            dailyExpense={daily_expense}
                            animType={anim_type}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Catalog;