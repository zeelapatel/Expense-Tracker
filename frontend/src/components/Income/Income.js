import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Income() {
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <div className='incomes-content'>
                <div className='form-container'>
                    <div className='income'>
                        
                    </div>
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`



`;

export default Income