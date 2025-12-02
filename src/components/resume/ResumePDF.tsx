import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { experiences } from '@/data/experience';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1f2937',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#1f2937',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#111827',
  },
  title: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 15,
    fontSize: 9,
    color: '#6b7280',
  },
  contactItem: {
    flexDirection: 'row',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 4,
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
  },
  roleTitle: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 2,
  },
  location: {
    fontSize: 9,
    color: '#9ca3af',
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#4b5563',
  },
  highlightsList: {
    marginTop: 4,
    paddingLeft: 10,
  },
  highlight: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skill: {
    fontSize: 9,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    color: '#374151',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 30,
  },
  column: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
  },
});

interface ResumePDFProps {
  locale: 'pt' | 'en';
}

const translations = {
  pt: {
    title: 'Design Leader | DesignOps | Design Systems | Product Analytics',
    email: 'gui@guigonzalez.com.br',
    phone: '+55 11 99999-9999',
    location: 'São Paulo, Brasil',
    linkedin: 'linkedin.com/in/guigonzalez',
    summaryTitle: 'Resumo Profissional',
    summary: 'Designer brasileiro com formação em Gestão de Pessoas e Liderança, especialização em Design Ops e ampla experiência na implementação de Design Systems do zero. Trabalho com experiência do usuário e design de serviços há 20 anos e lidero equipes para o sucesso nos últimos 10 anos. Especialista em transformar desafios de negócio em soluções de design mensuráveis.',
    experienceTitle: 'Experiência Profissional',
    skillsTitle: 'Competências',
    educationTitle: 'Formação',
    present: 'Atual',
  },
  en: {
    title: 'Design Leader | DesignOps | Design Systems | Product Analytics',
    email: 'gui@guigonzalez.com.br',
    phone: '+55 11 99999-9999',
    location: 'São Paulo, Brazil',
    linkedin: 'linkedin.com/in/guigonzalez',
    summaryTitle: 'Professional Summary',
    summary: 'Brazilian Designer with a degree in People Management and Leadership, specialization in Design Ops, and extensive experience implementing Design Systems from scratch. Working with user experience and service design for 20 years and leading teams to success for the last 10 years. Expert in translating business challenges into measurable design solutions.',
    experienceTitle: 'Professional Experience',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    present: 'Present',
  },
};

const skills = [
  'Design Leadership',
  'Design Systems',
  'DesignOps',
  'Product Analytics',
  'UX Strategy',
  'User Research',
  'Figma',
  'Design Tokens',
  'Agile/Scrum',
  'Team Management',
  'Mentorship',
  'ROI de UX',
];

const education = {
  pt: [
    { degree: 'Especialização em Design Ops', institution: 'Instituição', year: '2020' },
    { degree: 'Gestão de Pessoas e Liderança', institution: 'Instituição', year: '2018' },
  ],
  en: [
    { degree: 'Specialization in Design Ops', institution: 'Institution', year: '2020' },
    { degree: 'People Management and Leadership', institution: 'Institution', year: '2018' },
  ],
};

export function ResumePDF({ locale }: ResumePDFProps) {
  const t = translations[locale];
  const mainExperiences = experiences.slice(0, 10);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Guilherme Gonzalez</Text>
          <Text style={styles.title}>{t.title}</Text>
          <View style={styles.contactRow}>
            <Text>{t.email}</Text>
            <Text>|</Text>
            <Text>{t.linkedin}</Text>
            <Text>|</Text>
            <Text>{t.location}</Text>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.summaryTitle}</Text>
          <Text style={styles.summaryText}>{t.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experienceTitle}</Text>
          {mainExperiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.period}>
                  {exp.period.start} - {exp.period.end || t.present}
                </Text>
              </View>
              <Text style={styles.roleTitle}>{exp.role[locale]}</Text>
              {exp.location && (
                <Text style={styles.location}>{exp.location[locale]}</Text>
              )}
              <Text style={styles.description}>{exp.description[locale]}</Text>
              {exp.highlights && exp.highlights[locale].length > 0 && (
                <View style={styles.highlightsList}>
                  {exp.highlights[locale].map((highlight, i) => (
                    <Text key={i} style={styles.highlight}>• {highlight}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.skillsTitle}</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          guigonzalez.com.br | Generated {new Date().toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US')}
        </Text>
      </Page>
    </Document>
  );
}
