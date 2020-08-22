const questions = [
    {
        question: 'Qn: Which of the following statement is/are correct about Favipiravir?',
        options: [
            'Favipiravir is an antiviral COVID-19 drug.',
            'Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.',
            'It is India\'s first COVID- 19 drug launched, priced at Rs 103 per tablet.',
            'All the above are correct.'
        ],
        answer: 3,
        image: '',
        explanation: 'Favipiravir is an antiviral COVID-19 drug. Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir. It is India\'s first COVID- 19 drug launched, priced at Rs 103 per tablet.'
    },
    {
        question: 'Qn: How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?',
        options: [
            'More than 50',
            'More than 100',
            'More than 150',
            'More than 200'
        ],
        answer: 3,
        image: '',
        explanation: 'According to WHO, around 216 countries, areas or territories are suffering from novel coronavirus or COVID-19 outbreak in the world till 11 June, 2020.'
    },
    {
        question: 'Qn: Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?',
        options: [
            'Monkeys',
            'Lizards',
            'Hens',
            'Kites'
        ],
        answer: 0,
        image: '',
        explanation: 'After seeing positive results on mice now Thailand announced that it has proceeded to test its novel coronavirus vaccine on monkeys. The vaccine uses messenger RNA (mRNA) technology to weaken the strain of the virus and produce antigens to fight with the virus from the root.'
    },
    {
        question: "Qn: In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
        options: [
            'P-cell',
            'D-cell',
            'T-cell',
            'Endothelial cells'
        ],
        answer: 2,
        image: '',
        explanation: 'T cells are known as immune warriors help us fight some viruses, but their importance for battling SARS-CoV-2, the virus that causes COVID-19, has been unclear. Research is going on and maybe it can be fruitful.'
    },
    {
        question: 'Qn: Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?',
        options: [
            'BNT162',
            'PICOVACC',
            'Both A and B',
            'Neither A nor B'
        ],
        answer: 0,
        image: '',
        explanation: 'BNT162 is jointly developed by the German company BioNTech and US pharma giant Pfizer. It is a group of four potential vaccines based on the messenger RNA or mRNA, concept. On the other hand, PICOVACC is an inactivated vaccine developed by the private biopharma company Sinovac. These vaccines are in clinical trial phases.'
    },
    {
        question: 'Qn: Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?',
        options: [
            'Plasma Therapy',
            'Solidarity',
            'Remdesivir',
            'Hydroxychloroquine'
        ],
        answer: 0,
        image: '',
        explanation: 'Plasma Therapy or Convalescent Plasma Therapy is a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition.'
    },
    {
        question: 'Qn: How does Coronavirus transmit?',
        options: [
            'When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.',
            'If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.',
            'If the distance is less than 1 meter from the infected person.',
            'All the above are correct.'
        ],
        answer: 3,
        image: '',
        explanation: 'Coronavirus (COVID-19) transmits through the above-mentioned options.'
    },
    {
        question: 'Qn: What happens to a person suffering from COVID-19?',
        options: [
            'Around 80% of the people will require no treatment as such and will recover on their own.',
            'Around <20% or a small proportion may need hospitalisation.',
            'A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).',
            'All the above are correct'
        ],
        answer: 3,
        image: '',
        explanation: 'A person who develops COVID-19: Majority of the people (80%) does not require treatment and will recover on their own, small proportion (<20%) may need hospitalisation and a very small proportion who are underlying chronic illness may need to admit in an ICU.'
    },
    {
        question: 'Qn: In which age group the COVID-19 spreads?',
        options: [
            'COVID-19 occur in all age groups.',
            'Coronavirus infection is mild in children.',
            'Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.',
            'All the above are correct.'
        ],
        answer: 3,
        image: '',
        explanation: 'COVID-19 occur in all the age groups. But according to AIMS the infection of coronavirus is mild in children. Persons are at risk who are old and a person suffering from some medical conditions like high blood pressure, cancer, lung disease, diabetes, heart disease.'
    },
    {
        question: 'Qn: What is Coronavirus?',
        options: [
            'It is a large family of viruses.',
            'It belongs to the family of Nidovirus.',
            'Both A and B are correct',
            'Only A is correct.'
        ],
        answer: 2,
        image: '',
        explanation: 'Coronaviruses are a large family of viruses and belong to the Nidovirus family or Nidovirales order, which includes Coronaviridae, Arteriviridae, and Roniviridae families.'
    },
    {
        question: 'Qn: World Health Organisation on 11 February, 2020 announced an official name for the disease that is causing the 2019 novel coronavirus outbreak? What is the new name of the disease?',
        options: [
            'COVID-19',
            'COVn-19',
            'COnV-20',
            'COnVID-19'
        ],
        answer: 0,
        image: '',
        explanation: 'WHO named the disease that is caused by the novel coronavirus as COVID-19.'
    },
    {
        question: 'Qn: The first case of novel coronavirus was identified in ...',
        options: [
            'Beijing',
            'Shanghai',
            'Wuhan, Hubei',
            'Tianjin'
        ],
        answer: 2,
        image: '',
        explanation: 'The first case of novel coronavirus was identified in Wuhan, Hubei Province, China'
    },
    {
        question: 'Qn: Which of the following diseases are related to coronavirus?',
        options: [
            'MERS',
            'SARS',
            'Both A and B',
            'Neither A nor B'
        ],
        answer: 2,
        image: '',
        explanation: 'Coronavirus may cause illness from the common cold to more other serious diseases like Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).'
    },
    {
        question: 'Qn: Mild Symptoms of Novel coronavirus are:',
        options: [
            'Fever',
            'Cough',
            'Shortness of breath',
            'All the above'
        ],
        answer: 3,
        image: '',
        explanation: 'People infected with novel coronavirus or 2019-nCoV reported with mild symptoms namely fever, cough and shortness of breath. Whereas other common symptoms may include runny nose, headache, sore throat, a general feeling of unwell, etc.'
    },
    {
        question: 'Qn: From where coronavirus got its name?',
        options: [
            'Due to their crown-like projections.',
            'Due to their leaf-like projections.',
            'Due to their surface structure of bricks.',
            'None of the above'
        ],
        answer: 0,
        image: '',
        explanation: 'Due to their crown-like projections on the surfaces coronaviruses got their name. The virus resembles a crown when viewed under an electron microscope. "Corona” in Latin means "halo" or "crown".'
    }
]

