import { TYPED_STRINGS } from '@/app/constants'
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function SpanAnimation() {
  return (
    <>
      <h1 className={"text-3xl  max-sm:text-xl text-indigo-300 font-mono leading-relaxed"}>
        <Typewriter
          options={{
            strings: TYPED_STRINGS,
            autoStart: true,
            loop: true,
            delay:50
          }}
        />
      </h1>
    </>
  )
}
