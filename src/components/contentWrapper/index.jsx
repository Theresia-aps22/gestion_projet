import React from 'react';
import ContentHeader from '../contentHeader';
import ProjectForm from '../projectForm';

export default function ContentWrapper() {
    return (
        <div className="content-wrapper">
            <ContentHeader />
            <section className="content">
                <ProjectForm />
            </section>
        </div>
    );
}
