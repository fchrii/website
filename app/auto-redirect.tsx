"use client"

import { useEffect, useState } from "react"

export default function AutoRedirect({ newDomain, seconds = 10 }: { newDomain: string; seconds?: number }) {
  const [countdown, setCountdown] = useState(seconds)

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = newDomain
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, newDomain])

  return (
    <div className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4 transition-colors duration-300">
      Anda akan dialihkan ke domain baru dalam <span className="font-medium">{countdown}</span> detik
    </div>
  )
}

