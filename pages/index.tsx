import React, { useState } from 'react';
import type { NextPage } from 'next'

import { SearchFilters } from '../components';
import { IFilters } from '../models/IFilters';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [filters, setFilters] = useState<IFilters>({
    s: '',
    price: '',
    fromDate: new Date("2022-08-15").toISOString().split('T')[0],
    toDate: new Date("2022-12-16").toISOString().split('T')[0],
    sort: ''
  });

  return (
    <div className={styles.container}>
      <SearchFilters filters={filters} setFilters={setFilters} />
    </div>
  )
}

export default Home
