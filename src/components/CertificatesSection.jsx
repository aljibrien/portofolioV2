"use client";

import { motion } from "framer-motion";
import CertificateCard from "@/app/certificate/CertificateCard";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-red-500">Certificates</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Sertifikasi yang mendukung kemampuan teknis dan profesional saya
            (kurang cik😹)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10"
        >
          <CertificateCard
            title="Dasar Pemograman Web"
            issuer="Dicoding Indonesia"
            year="2024"
            image="/SertifikatDasarPemograman.png"
          />
          <CertificateCard
            title="Dasar Pemograman Javascript"
            issuer="Dicoding Indonesia"
            year="2024"
            image="/SertifikatDasarPemogramanJS.png"
          />
        </motion.div>
      </div>
    </section>
  );
}
