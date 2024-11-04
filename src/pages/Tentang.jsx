import React from "react";

const Tentang = () => {
    return (
        <div className="container">
            <div className="about-section">
                <section className="about">
                    <h2>Tentang Kami</h2>
                        <div className="about-content">
                            <div className="about-text">
                                <p><strong>FarmEduz</strong> adalah platform edukasi pertanian berbasis teknologi untuk masyarakat Indonesia, khususnya Gen Z.</p>
                                <p>Kami menyediakan berbagai course yang dirancang untuk memajukan inovasi sektor pertanian masa depan di Indonesia.</p>
                                <p>Team <br/> FarmEduz</p>
                            </div>
                        </div>
                        <div>
                            <img src="./about.jpg" alt="Tentang FarmEduz" className="about-image"/>
                        </div>
                </section>
            </div>
            
            <div className="features-section">
                <section className="features">
                    <h3>Kenapa <span>FarmEduz</span>?</h3>
                    <div className="feature-list">
                        <div className="feature-item">
                            <img src="path/to/certificate-icon.png" alt="Sertifikasi" class="feature-icon"/>
                            <h4>Sertifikasi</h4>
                            <p>Setiap kali berhasil menyelesaikan sebuah kelas, kamu akan mendapatkan Sertifikat.</p>
                        </div>
                        <div className="feature-item">
                            <img src="path/to/personalized-learning-icon.png" alt="Personalized Learning" class="feature-icon"/>
                            <h4>Proses Pembelajaran Personalisasi</h4>
                            <p>Kamu bebas memilih spesialisasi yang diinginkan agar dapat disesuaikan dengan kebutuhan saat ini.</p>
                        </div>
                        <div className="feature-item">
                            <img src="path/to/video-learning-icon.png" alt="Pembelajaran Video" class="feature-icon"/>
                            <h4>Pembelajaran Berbasis Video</h4>
                            <p>Materi secara praktis melalui sesi video, tutorial langkah demi langkah, dan studi kasus nyata dari praktisi terbaik.</p>
                        </div>
                        <div className="feature-item">
                            <img src="path/to/agriculture-icon.png" alt="Kebutuhan Pertanian" class="feature-icon"/>
                            <h4>Berdasarkan Kebutuhan Pertanian</h4>
                            <p>Hemat waktu dan biaya! Materi FarmEduz dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Tentang;