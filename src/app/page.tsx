'use client'

import Button from '@/components/Button'
import Processing from '@/components/Processing'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Button title='btn' onClick={() => { }}/>
      
      <div>Homepage</div>
      
      <Processing/>
    </div>
  )
}
