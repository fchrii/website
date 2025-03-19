"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DomainChangePage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Replace with your new domain
  const newDomain = "https://techtonics.space/"
  const currentYear = new Date().getFullYear()

  // Hindari hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      <ThemeToggle />

      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-colors duration-300">
        <div className="bg-blue-600 dark:bg-blue-700 p-6 transition-colors duration-300">
          <h1 className="text-2xl font-bold text-white text-center">Pemberitahuan Penting</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Anime GIF */}
          <div className="flex justify-center pt-4">
            <img
              src="https://media1.tenor.com/m/lUU2wbgHrioAAAAC/konata-luckystar.gif"
              alt="Anime character typing"
              className="rounded-md max-w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
              Website Ini Telah Pindah Domain
            </h2>

            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Terima kasih telah mengunjungi website kami. Kami telah memindahkan website ini ke domain baru untuk
              meningkatkan layanan kami.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Domain baru kami:
              </p>
              <p className="font-medium text-blue-700 dark:text-blue-400 break-all transition-colors duration-300">
                {newDomain}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={newDomain}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
            >
              Kunjungi Website Baru
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center transition-colors duration-300">
            Mohon perbarui bookmark Anda untuk mengakses website kami di masa mendatang.
          </p>

        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
        © {currentYear} / <span className="font-medium">Techtonic's Class</span>
        <div className="flex justify-center space-x-6 mt-3">
          <Link
            href="https://instagram.com/setesa.smuhsa/"
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
          </Link>
          <Link
            href="https://tiktok.com/@setesa.smuhsa/"
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <i className="fa-brands fa-tiktok text-xl"></i>
          </Link>
          <Link
            href="https://ctf.techtonics.space/"
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <i className="fa-solid fa-flag text-xl"></i>
          </Link>
          <Link
            href="mailto:akunclasstjkt1@gmail.com"
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <i className="fa-solid fa-envelope text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Debug info - hanya terlihat setelah mounted */}
      {mounted && (
        <div className="fixed bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400">Theme: {resolvedTheme}</div>
      )}
    </div>
  )
}

