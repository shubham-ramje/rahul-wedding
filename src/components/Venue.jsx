import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink, Sparkles } from 'lucide-react';

const Venue = () => {
  const venueAddress = 'जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर (म.प्र.)';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('G-55 Lahiya Colony Near Khatu Shyam Mandir Kabitkhedi Indore Madhya Pradesh');
  const googleMapsDirectionUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('G-55 Lahiya Colony Near Khatu Shyam Mandir Kabitkhedi Indore Madhya Pradesh');

  return (
    <section
      id="venue"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '1000px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            <MapPin size={16} />
            <span>शुभ स्थल</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ कार्यक्रम स्थल ॥
          </h2>
          <p className="section-subtitle">
            आपकी गरिमामयी उपस्थिति एवं स्नेहिल शुभाशीर्वाद की प्रतीक्षा में
          </p>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* Venue Layout: Card & Map Preview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {/* Location Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card ornate-corners"
            style={{
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '2px solid rgba(212, 175, 55, 0.45)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFDF73',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                }}
                className="font-hindi"
              >
                <Compass size={22} color="#D4AF37" />
                <span>निज निवास:</span>
              </div>

              {/* Exact Venue Address */}
              <div
                className="font-hindi"
                style={{
                  padding: '22px',
                  borderRadius: '14px',
                  background: 'rgba(36, 5, 13, 0.7)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  marginBottom: '24px',
                }}
              >
                <p
                  style={{
                    color: '#FFF8E7',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    lineHeight: '1.8',
                  }}
                >
                  जी-55, लाहिया कॉलोनी,
                </p>
                <p
                  style={{
                    color: '#FFDF73',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    lineHeight: '1.8',
                  }}
                >
                  खाटू श्याम मंदिर के पास,
                </p>
                <p
                  style={{
                    color: '#FFF8E7',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    lineHeight: '1.8',
                  }}
                >
                  कबीटखेड़ी, इन्दौर (म.प्र.)
                </p>
              </div>

              <div
                className="font-hindi"
                style={{
                  color: '#E8D5A3',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  marginBottom: '26px',
                }}
              >
                <p>
                  📍 <strong>प्रमुख पहचान:</strong> प्रसिद्ध खाटू श्याम मंदिर के समीप, लाहिया कॉलोनी, कबीटखेड़ी।
                </p>
                <p style={{ marginTop: '8px' }}>
                  🚗 सुगम आवागमन एवं पर्याप्त वाहन पार्किंग की व्यवस्था उपलब्ध है।
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-gold"
                style={{ width: '100%' }}
              >
                <Navigation size={18} />
                <span>दिशा निर्देश प्राप्त करें (Get Directions)</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-outline"
                style={{ width: '100%' }}
              >
                <ExternalLink size={16} />
                <span>गूगल मैप्स पर देखें (Open in Maps)</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card"
            style={{
              minHeight: '380px',
              border: '2px solid rgba(212, 175, 55, 0.45)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '100%',
                flex: 1,
                minHeight: '340px',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <iframe
                title="Venue Map Location"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Khatu Shyam Mandir, Kabitkhedi, Indore, Madhya Pradesh')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
            <div
              style={{
                paddingTop: '10px',
                textAlign: 'center',
                color: '#E8D5A3',
                fontSize: '0.85rem',
              }}
            >
              <span>कबीटखेड़ी, इन्दौर (म.प्र.) • मैप को ज़ूम करके सही रास्ता देखें</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
