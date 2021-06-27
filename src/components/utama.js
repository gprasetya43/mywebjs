import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Beranda from './beranda'
import Halaman1 from './halaman1';
import Halaman2 from './halaman2';
import Halaman3 from './halaman3';


const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/halaman1" component={Halaman1} />
        <Route path="/halaman2" component={Halaman2} />
        <Route path="/halaman3" component={Halaman3} />
    </Switch>
)

export default Utama;