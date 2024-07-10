import React, { useEffect, useState } from 'react';
import data from './rwanda';

export interface ILocation {
    country: string;
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
}

interface RwandaLocationSelectorProps {
    setLocation?: React.Dispatch<React.SetStateAction<ILocation | null>>;
}

type RwandaData = {
    [key: string]: {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    [key: string]: string[];
                };
            };
        };
    };
};

type NestedObject = {
    [key: string]: NestedObject | string[];
  };

const rwandaData: RwandaData = data;

const RwandaLocationSelector: React.FC<RwandaLocationSelectorProps> = ({ setLocation }) => {
    const [country, setCountry] = useState('Rwanda');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [sector, setSector] = useState('');
    const [cell, setCell] = useState('');
    const [village, setVillage] = useState('');

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value);
        setProvince('');
        setDistrict('');
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProvince(e.target.value);
        setDistrict('');
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDistrict(e.target.value);
        setSector('');
        setCell('');
        setVillage('');
    };

    const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSector(e.target.value);
        setCell('');
        setVillage('');
    };

    const handleCellChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCell(e.target.value);
        setVillage('');
    };

    const handleVillageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVillage(e.target.value);
    };

    const getOptions = (selectedData: NestedObject) => {
        return Object.keys(selectedData).map(key => <option key={key} value={key}>{key}</option>);
    };

    const getArrayOptions = (array: string[]) => {
        return array.map(item => <option key={item} value={item}>{item}</option>);
    };

    useEffect(() => {
        setLocation && setLocation({ country, province, district, sector, cell, village });
    }, [country, province, district, sector, cell, village, setLocation]);

    const geoSelectStyles = "mb-2 rounded-md border bg-transparent px-2 py-2 mr-2 text-base text-white focus:border-primary focus-visible:shadow-none custom-select";

    return (
        <div className="geo mb-6 w-full sm:w-2/3 grid grid-cols-2">
            <select value={country} onChange={handleCountryChange} className={geoSelectStyles}>
                <option value="">Select Country</option>
                {getOptions(rwandaData)}
            </select>

            <select value={province} onChange={handleProvinceChange} disabled={!country} className={geoSelectStyles}>
                <option value="">Select Province</option>
                {country && getOptions(rwandaData[country])}
            </select>

            <select value={district} onChange={handleDistrictChange} disabled={!province} className={geoSelectStyles}>
                <option value="">Select District</option>
                {province && getOptions(rwandaData[country][province])}
            </select>

            <select value={sector} onChange={handleSectorChange} disabled={!district} className={geoSelectStyles}>
                <option value="">Select Sector</option>
                {district && getOptions(rwandaData[country][province][district])}
            </select>

            <select value={cell} onChange={handleCellChange} disabled={!sector} className={geoSelectStyles}>
                <option value="">Select Cell</option>
                {sector && getOptions(rwandaData[country][province][district][sector])}
            </select>

            <select value={village} onChange={handleVillageChange} disabled={!cell} className={geoSelectStyles}>
                <option value="">Select Village</option>
                {cell && getArrayOptions(rwandaData[country][province][district][sector][cell])}
            </select>
        </div>
    );
};

export default RwandaLocationSelector;