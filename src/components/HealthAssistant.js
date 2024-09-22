import React, { useState, useEffect } from 'react';
import { FaQuestionCircle, FaPlusSquare } from 'react-icons/fa';
import ChatApp from './ChatApp';
import spinner from './assets/3d.gif';  // Path to your spinner image

const HealthAssistant = () => {
    const [query, setQuery] = useState('');
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state
    const userId = 'AkshatJain'; // Replace with dynamic user ID if needed

    // Function to fetch suggested questions
    const fetchSuggestions = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch('https://wearlytics.pythonanywhere.com/api/suggestions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: userId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSuggestedQuestions([
                data['question 1'],
                data['question 2'],
                data['question 3'],
                data['question 4'],
            ]);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Fetch suggestions when the component first loads
    useEffect(() => {
        fetchSuggestions();
    }, []); // Empty dependency array ensures this runs only on mount

    // Function to handle adding suggested question to input field
    const addSuggestedQuestion = (suggestion) => {
        setQuery(suggestion);
    };

    return (
        <div 
            className="card" 
            style={{ 
                padding: '15px', 
                maxWidth: '400px', 
                margin: '0 auto 20px auto', 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            {/* Title */}
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>
                Health Assistant <FaQuestionCircle />
            </h2>
            
            {/* Pass down query state and fetchSuggestions as props to ChatApp */}
            <ChatApp 
                query={query} 
                setQuery={setQuery} 
                onSend={() => fetchSuggestions()} // Trigger suggestions when sending chat
            />

            {/* Suggested questions */}
            <div style={{ marginBottom: '15px' }}>
                <h4 style={{ marginBottom: '10px' }}>Suggested Questions</h4>
                
                {loading ? (
                    // Display loading spinner in the center when loading
                    <div style={{ textAlign: 'center' }}>
                        <img src={spinner} alt="Loading..." style={{ width: '50px', animation: 'spin 1s linear infinite' }} />
                    </div>
                ) : (
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        {suggestedQuestions.map((suggestion, index) => (
                            <li 
                                key={index} 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    padding: '10px', 
                                    borderBottom: '1px solid #ddd' 
                                }}
                            >
                                <span>{suggestion}</span>
                                <button 
                                    style={{ 
                                        padding: '5px', 
                                        backgroundColor: '#28a745', 
                                        color: '#fff', 
                                        border: 'none', 
                                        borderRadius: '4px', 
                                        width: '40px', // Set constant width
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center'
                                    }}
                                    onClick={() => addSuggestedQuestion(suggestion)}
                                >
                                    <FaPlusSquare />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default HealthAssistant;
