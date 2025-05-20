import React from 'react'
import { GridLoader } from 'react-spinners'

export default function Loadingg({vh}) {
  return (
<div className={`flex justify-center ${vh?'min-h-[50vh]':'min-h-[80vh]'} items-center `}>
<GridLoader color='#40C1BD' size={25} />
</div>
  )
}
