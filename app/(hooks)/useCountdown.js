// import { useEffect, useState } from 'react'

// export default function useCountdown(targetDate) {
//   const [timeLeft, setTimeLeft] = useState(() => targetDate - Date.now())

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(targetDate - Date.now())
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [targetDate])

//   /* helper */
//   const clamp = (n) => (n < 0 ? 0 : n)
//   const seconds = clamp(Math.floor(timeLeft / 1000) % 60)
//   const minutes = clamp(Math.floor(timeLeft / 1000 / 60) % 60)
//   const hours   = clamp(Math.floor(timeLeft / 1000 / 60 / 60) % 24)
//   const days    = clamp(Math.floor(timeLeft / 1000 / 60 / 60 / 24))

//   return { days, hours, minutes, seconds, isExpired: timeLeft <= 0 }
// }


import { useEffect, useState } from 'react'

/**
 * useCountdown — returns { days, hours, minutes, seconds, isExpired }
 *
 * If the target date/time is in the past it returns 0 0 0 0 immediately
 * and never re‑renders again.
 */
export default function useCountdown(targetDate) {
  // helper: never let the diff drop below 0
  const diff = () => Math.max(new Date(targetDate).getTime() - Date.now(), 0)

  const [timeLeft, setTimeLeft] = useState(diff)

  useEffect(() => {
    if (timeLeft === 0) return                          // already expired

    const id = setInterval(() => {
      setTimeLeft(d => {
        const next = diff()
        if (next === 0) clearInterval(id)               // stop when done
        return next
      })
    }, 1000)

    return () => clearInterval(id)
  }, [targetDate, timeLeft])

  /* ─────────── breakdown ─────────── */
  const days    = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
  const hours   = Math.floor(timeLeft / 1000 / 60 / 60) % 24
  const minutes = Math.floor(timeLeft / 1000 / 60)      % 60
  const seconds = Math.floor(timeLeft / 1000)           % 60

  return { days, hours, minutes, seconds, isExpired: timeLeft === 0 }
}
