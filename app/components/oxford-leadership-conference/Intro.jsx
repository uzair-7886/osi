import React from 'react'
import { PortableText } from '@portabletext/react'
import useCountdown from '@/app/(hooks)/useCountdown'

export default function Intro({ hero }) {
  const { headline, location,dates, countdownDate, overview,
          registerText, registerUrl, agendaText, agendaUrl } = hero

  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    new Date(countdownDate).getTime()
  )

  return (
    <header className="relative max-w-7xl mx-auto text-white py-20 px-4 text-center">
      <h1 className="text-3xl md:text-3xl  mb-4 text-orange font-medium">
        {headline}
      </h1>

      <p className="mb-2 uppercase tracking-wide text-darkblue text-xl font-medium">
        {dates} &nbsp;|&nbsp; {location}
      </p>

      <div className="max-w-5xl mx-auto   text-lg text-grey space-y-4 mb-8">
         <PortableText
                  value={overview}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-base text-justify text-grey leading-relaxed mb-4">
                          {children}
                        </p>
                      )
                    }
                  }}
                />
      </div>

      {/* Countdown */}
      <div className="flex justify-center gap-4 mb-8">
        {['Days','Hours','Minutes','Seconds'].map((label,i)=>(
          <div key={label} className="text-center">
            <p className="text-4xl font-semibold text-orange">
              {[days,hours,minutes,seconds][i].toString().padStart(2,'0')}
            </p>
            <p className="text-sm text-darkblue uppercase">{label}</p>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={registerUrl} className="px-6 py-3 bg-darkblue text-white rounded-full font-medium">
          {registerText}
        </a>
        <a href={agendaUrl}  className="px-6 py-3 bg-transparent border border-darkblue text-darkblue rounded-full">
          {agendaText}
        </a>
      </div>

      {isExpired && <p className="mt-4 text-sm text-grey italic">Conference in progress</p>}
    </header>
  )
}
