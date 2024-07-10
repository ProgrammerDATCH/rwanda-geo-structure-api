import React, { useState } from 'react'
import data from './rwanda'

const Component = () => {


    const [country, setCountry] = useState('Rwanda');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [sector, setSector] = useState('');
    const [cell, setCell] = useState('');
    const [village, setVillage] = useState('');

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setProvince('');
        setDistrict('');
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleProvinceChange = (e) => {
        setProvince(e.target.value);
        setDistrict('');
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleSectorChange = (e) => {
        setSector(e.target.value);
        setCell('');
        setVillage('');
    };

    const handleCellChange = (e) => {
        setCell(e.target.value);
        setVillage('');
    };

    const handleVillageChange = (e) => {
        setVillage(e.target.value);
    };

    const getOptions = (data) => {
        return Object.keys(data).map(key => <option key={key} value={key}>{key}</option>);
    };

    const getArrayOptions = (array) => {
        return array.map(item => <option key={item} value={item}>{item}</option>);
    };

    const geoSelectStyles = "mb-2 rounded-md border bg-transparent px-2 py-2 mr-2 text-base text-textColor focus:border-primary focus-visible:shadow-none custom-select";

    return (
        <div className="geo mb-6 w-full sm:w-2/3 grid grid-cols-2">
            <select value={country} onChange={handleCountryChange} className={geoSelectStyles}>
                <option value="">Select Country</option>
                {getOptions(data)}
            </select>

            <select value={province} onChange={handleProvinceChange} disabled={!country} className={geoSelectStyles}>
                <option value="">Select Province</option>
                {country && getOptions(data[country])}
            </select>

            <select value={district} onChange={handleDistrictChange} disabled={!province} className={geoSelectStyles}>
                <option value="">Select District</option>
                {province && getOptions(data[country][province])}
            </select>

            <select value={sector} onChange={handleSectorChange} disabled={!district} className={geoSelectStyles}>
                <option value="">Select Sector</option>
                {district && getOptions(data[country][province][district])}
            </select>

            <select value={cell} onChange={handleCellChange} disabled={!sector} className={geoSelectStyles}>
                <option value="">Select Cell</option>
                {sector && getOptions(data[country][province][district][sector])}
            </select>

            <select value={village} onChange={handleVillageChange} disabled={!cell} className={geoSelectStyles}>
                <option value="">Select Village</option>
                {cell && getArrayOptions(data[country][province][district][sector][cell])}
            </select>
        </div>
    )
}

export default Component