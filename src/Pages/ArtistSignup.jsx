import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistSignup.css'

const ArtistSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    artistType: '',
    bio: '',
    artMediums: '',
    isAnonymous: false,
    profileImage: '',
    sampleArtworks: '',
  });

  const [preview, setPreview] = useState({});

  useEffect(() => {
    setPreview({
      username: form.isAnonymous ? '@anonymous' : form.username,
      bio: form.bio,
      artistType: form.artistType,
      artMediums: form.artMediums.split(',').map(m => m.trim()),
      profileImage: form.profileImage,
    });
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to backend with auth header
    console.log('Submitted form:', form);
  };

  return (
    <div className="signup-container">
    <h1 className="heading">Become an Artist</h1>
    <p className="subheading">
      Create your artist profile and start sharing your work with the world. Your identity can stay hidden if you choose.
    </p>

    <div className="grid-container">
      {/* Form */}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label className="form-label">Artist Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Are you a Professional or Passionate artist?</label>
          <select
            name="artistType"
            value={form.artistType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">-- Select --</option>
            <option value="Professional">Professional</option>
            <option value="Passionate">Passionate</option>
            <option value="Still Exploring">Still Exploring</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Short Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            className="form-textarea"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">Art Mediums (comma separated)</label>
          <input
            type="text"
            name="artMediums"
            value={form.artMediums}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
            <label className="form-label">Upload Profile Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (file.size > 5 * 1024 * 1024) {
                        alert('Image is too large. Please upload a file under 5MB.');
                        return;
                      }
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setForm(prev => ({ ...prev, profileImage: reader.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  
                className="form-input"
            />
              <p className="image-warning">Maximum image size should be 5MB</p>
            </div>


            <div className="form-group">
  <label className="form-label">Upload Sample Artworks</label>
  <input
    type="file"
    name="sampleArtworks"
    accept="image/*"
    multiple
    onChange={handleChange}
    className="form-input"
  />
  <p className="image-warning">Maximum image size for each file should be 5MB</p>
</div>


        <div className="checkbox-container">
          <input
            type="checkbox"
            name="isAnonymous"
            checked={form.isAnonymous}
            onChange={handleChange}
          />
          <label>Sell Anonymously</label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Artist Profile
        </button>
      </form>

      {/* Preview */}
      <div className="preview-container">
        <h2 className="preview-heading">Live Profile Preview</h2>
        {preview.profileImage && (
          <img src={preview.profileImage} alt="Artist" className="preview-image" />
        )}
        <h3 className="preview-username">{preview.username || 'Your Artist Name'}</h3>
        <p className={`rank-badge ${
  preview.artistType === 'Professional'
    ? 'rank-professional'
    : preview.artistType === 'Passionate'
    ? 'rank-passionate'
    : preview.artistType === 'Still Exploring'
    ? 'rank-exploring'
    : ''
}`}>{preview.artistType || 'Artist Type'}</p>
        <p className="preview-bio">{preview.bio || 'Your short bio will appear here.'}</p>

        {preview.artMediums?.length > 0 && (
          <div className="preview-mediums">
            <h4>Mediums:</h4>
            <ul>
              {preview.artMediums.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default ArtistSignup;
