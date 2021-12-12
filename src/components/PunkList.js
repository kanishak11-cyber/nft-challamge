import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({ punkListData }) => {
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div>
                    <CollectionCard
                    key={punk.token_id} 
                    id={punk.token_id}
                    name={punk.name}
                    image={punk.image_original_url}
                    traits={punk.traits}
                    />
                </div>
            ))}

        </div>
    )
}

export default PunkList
