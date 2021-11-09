import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

import "react-datepicker/dist/react-datepicker.css";
import { HeaderContainer, Content, Product, Counter, Total } from './styles/global';
import { GlobalStyle } from "./styles/global";

type ProductTypeRequest = {
  name: string;
  value: number;
  id: string
}

function App() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState<ProductTypeRequest[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    products.map((product) => {
      let sumTotal = 0;
      sumTotal = (product.value * counter) + sumTotal
      return setTotal(sumTotal)
    })   
  }, [counter])

  function handleDecrementCounter() {
    if(counter > 0){
      setCounter(counter - 1)
    } else return
  }

  function handleIncrementCounter() {
    setCounter(counter + 1)
  }

  const getProducts = async () => {
    const params = new URLSearchParams()
    params.append('method', 'getProductsByDate')
    params.append('date', `${startDate?.toLocaleDateString()}`)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    
    axios.post('https://travelxs.websiteseguro.com/demonstracao_motor_tradicional/proxy.php', params, config)
      .then((result) => {
        const products = result.data.map((product: ProductTypeRequest) => {
          return {
            name: product.name,
            value: Number(product.value),
            id: product.id,
          }
        })
        setProducts(products)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  return (
    <>
      <HeaderContainer>
        <Content>
          <h1>Selecione uma data para buscar os produtos</h1>

          <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} 
            locale={ptBR}
          />
            
          <button onClick={getProducts}>Buscar</button>
        </Content>
      </HeaderContainer>

      {products.map((product) => {
          return (
            <Product key={product.id}>
              <div>
                <p>{product.name}</p>
                <span>R$ {product.value.toFixed(2)}</span>
              </div>
  
              <Counter>
                <button onClick={handleDecrementCounter}>-</button>
                <p>{counter}</p>
                <button onClick={handleIncrementCounter}>+</button>
              </Counter>
            </Product>
          )
        })
      }
            
      <Total>
        <p>Total R${total.toFixed(2)}</p>
      </Total>
      <GlobalStyle />
    </>
  );
}

export default App;
