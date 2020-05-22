import React ,{ Component} from 'react';
import api from '../../services/api';





export default class Main extends Component{

    state = {
        products:[],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products');
        this.setState({products: response.data.docs});
        console.log(response);
    }

    render(){
        return (
            <div>
                {
                    this.state.products.map( product => (
                        <h2>{product.title}</h2>
                    ))
                }
            </div>
        )
    }
}

