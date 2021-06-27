import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Beranda extends Component {
    constructor() {
        super();
        this.state = {
            data: { nama: '' }
        };
    }
    handleChange = (event) => {
        this.setState({ nama: event.target.value })
    }

    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img
                            src="logo192.png"
                            alt="avatar"
                            className="avatar-img" />

                        <div className="banner-text">
                            <h1>Halo siapa namamu?</h1>
                            <input type="text" onChange={this.handleChange} />
                            <br></br>

                            <h2 >Selamat datang {this.state.nama} !!! </h2>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Beranda;