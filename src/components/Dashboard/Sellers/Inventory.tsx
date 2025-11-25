import React from 'react'
import Input from '../../modals/Input'
import Button from '../../modals/Button'


const Inventory:React.FC = () => {

  return (
    <div>
        <h1>Inventory System</h1>
        <div>
            <label htmlFor="">Sunflowers</label>
            <Input label='#Sunflowers' name='Sunflower' tov='number' />
        </div>
        <div>
            <Button  text='Add other' />
        </div>

    </div>
  )
}

export default Inventory