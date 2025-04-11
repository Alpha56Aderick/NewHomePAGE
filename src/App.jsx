import React from "react";
import { FaShareAlt, FaDownload, FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  // Sample document data - in a real app this would come from an API
  const [documents, setDocuments] = React.useState([
    { 
      id: 1,
      name: "Mathematics Syllabus",
      type: "pdf",
      size: "2.4 MB",
      uploaded: "2023-10-15T09:30:00",
      degree: "bachelor",
      year: "1st",
      semester: "first",
      department: "it",
      rating: 0,
      liked: false
    },
    { 
      id: 2,
      name: "Programming Lab Manual",
      type: "doc",
      size: "1.8 MB",
      uploaded: "2023-10-16T14:15:00",
      degree: "diploma",
      year: "2nd",
      semester: "second",
      department: "cs",
      rating: 0,
      liked: false
    },
    { 
      id: 3,
      name: "Database Systems Notes",
      type: "pdf",
      size: "3.2 MB",
      uploaded: "2023-10-17T11:45:00",
      degree: "bachelor",
      year: "3rd",
      semester: "first",
      department: "it",
      rating: 0,
      liked: false
    },
    { 
      id: 4,
      name: "Computer Networks Slides",
      type: "ppt",
      size: "5.1 MB",
      uploaded: "2023-10-18T10:20:00",
      degree: "bachelor",
      year: "2nd",
      semester: "second",
      department: "it",
      rating: 0,
      liked: false
    },
    //
    { 
      id: 5,
      name: "Algorithms Textbook",
      type: "pdf",
      size: "8.7 MB",
      uploaded: "2023-10-19T13:45:00",
      degree: "masters",
      year: "1st",
      semester: "first",
      department: "cs",
      rating: 0,
      liked: false
    },
    { 
      id: 6,
      name: "Operating Systems Guide",
      type: "pdf",
      size: "4.5 MB",
      uploaded: "2023-10-20T16:30:00",
      degree: "bachelor",
      year: "3rd",
      semester: "second",
      department: "coe",
      rating: 0,
      liked: false
    },
    { 
      id: 7,
      name: "Web Development Cheatsheet",
      type: "pdf",
      size: "1.2 MB",
      uploaded: "2023-10-21T11:15:00",
      degree: "diploma",
      year: "2nd",
      semester: "first",
      department: "it",
      rating: 0,
      liked: false
    },
    { 
      id: 8,
      name: "Data Structures Exercises",
      type: "doc",
      size: "2.9 MB",
      uploaded: "2023-10-22T14:50:00",
      degree: "bachelor",
      year: "1st",
      semester: "second",
      department: "cs",
      rating: 0,
      liked: false
    },
    { 
      id: 9,
      name: "Software Engineering Case Studies",
      type: "pdf",
      size: "6.3 MB",
      uploaded: "2023-10-23T09:10:00",
      degree: "masters",
      year: "2nd",
      semester: "first",
      department: "coe",
      rating: 0,
      liked: false
    },
    { 
      id: 10,
      name: "AI Fundamentals",
      type: "pdf",
      size: "7.8 MB",
      uploaded: "2023-10-24T15:25:00",
      degree: "bachelor",
      year: "4th",
      semester: "second",
      department: "it",
      rating: 0,
      liked: false
    },
    { 
      id: 11,
      name: "Computer Graphics Tutorial",
      type: "pdf",
      size: "3.6 MB",
      uploaded: "2023-10-25T10:40:00",
      degree: "bachelor",
      year: "3rd",
      semester: "first",
      department: "cs",
      rating: 0,
      liked: false
    },
    { 
      id: 12,
      name: "Network Security Handbook",
      type: "pdf",
      size: "9.2 MB",
      uploaded: "2023-10-26T12:55:00",
      degree: "masters",
      year: "1st",
      semester: "second",
      department: "it",
      rating: 0,
      liked: false
    }
  ]);

  const handleRating = (id) => {
    setDocuments(docs => docs.map(doc => 
      doc.id === id 
        ? { ...doc, rating: doc.rating === 5 ? 0 : doc.rating + 1 } 
        : doc
    ));
  };

  const handleLike = (id) => {
    setDocuments(docs => docs.map(doc => 
      doc.id === id ? { ...doc, liked: !doc.liked } : doc
    ));
  };

  const handleShare = (id) => {
    const doc = documents.find(d => d.id === id);
    console.log(`Sharing document: ${doc.name}`);
  };

  const handleDownload = (id) => {
    const doc = documents.find(d => d.id === id);
    console.log(`Downloading: ${doc.name}`);
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return '📕';
      case 'doc': return '📘';
      case 'xls': return '📗';
      default: return '📄';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleFilterChange = (filterType, value) => {
    setDocuments(prevDocs => {
      if (!value) return prevDocs;
      return prevDocs.filter(doc => doc[filterType] === value);
    });
  };

  return (
    <div className="app">
      <Navbar />

      <div className="filters">
        <select 
          className="filter-select"
          onChange={(e) => handleFilterChange('degree', e.target.value)}
        >
          <option value=""> Levels</option>
          <option value="certificate">Certificate</option>
          <option value="diploma">Diploma</option>
          <option value="bachelor">Bachelor</option>
          <option value="masters">Masters</option>
        </select>
        <select 
          className="filter-select"
          onChange={(e) => handleFilterChange('year', e.target.value)}
        >
          <option value="">Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
        <select 
          className="filter-select"
          onChange={(e) => handleFilterChange('semester', e.target.value)}
        >
          <option value="">Semesters</option>
          <option value="first">First Semester</option>
          <option value="second">Second Semester</option>
        </select>
        <select 
          className="filter-select"
          onChange={(e) => handleFilterChange('department', e.target.value)}
        >
          <option value="">Programs</option>
          <option value="coe">COE</option>
          <option value="it">IT</option>
          <option value="cs">CS</option>
        </select>
      </div>

      <div className="documents-section">
        {documents.map((doc) => (
          <div className="document-card" key={doc.id}>
            <div className="image-container" title={doc.name}>
              <div className="doc-image">{getFileIcon(doc.type)}</div>
              <div className="image-hover">
                <p className="hover-title">{doc.name}</p>
                <p className="hover-size">{doc.size}</p>
              </div>
            </div>
            <div className="action-container">
              <div className="stars" onClick={() => handleRating(doc.id)}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className={`star ${doc.rating >= star ? 'rated' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="icons">
                <FaShareAlt 
                  className="share-icon" 
                  onClick={() => handleShare(doc.id)} 
                />
                <FaDownload 
                  className="download-icon" 
                  onClick={() => handleDownload(doc.id)}
                />
                <FaHeart 
                  className={`like-icon ${doc.liked ? 'liked' : ''}`} 
                  onClick={() => handleLike(doc.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;