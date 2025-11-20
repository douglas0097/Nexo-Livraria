import React from 'react';
import LivroCard from '../livroCard/livroCard';
import type { Livro } from '../livrosInterface/livrosInterface';
import './livroGrade.css'; 

interface LivroGradeProps {
    livros: Livro[];
}

const LivroGrade: React.FC<LivroGradeProps> = ({ livros }) => {
    return (
        <div className="livro-grade-layout">
            {livros.map(livro => (
                <LivroCard key={livro.id} livro={livro} />
            ))}
        </div>
    );
};

export default LivroGrade;