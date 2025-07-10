import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CurrencyYenIcon, 
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Étudier au Japon - Guide Complet | JapanSit',
  description: 'Découvrez tout ce qu\'il faut savoir pour étudier au Japon : universités, bourses, visa étudiant, logement et conseils pratiques.',
};

const universities = [
  {
    name: 'Université de Tokyo',
    nameJP: '東京大学',
    type: 'Public',
    ranking: '#1',
    programs: ['Sciences', 'Médecine', 'Ingénierie', 'Économie'],
    tuition: '535,800 ¥/an',
    location: 'Tokyo',
    image: '/images/tokyo-university.jpg'
  },
  {
    name: 'Université de Kyoto',
    nameJP: '京都大学',
    type: 'Public',
    ranking: '#2',
    programs: ['Sciences', 'Lettres', 'Médecine', 'Ingénierie'],
    tuition: '535,800 ¥/an',
    location: 'Kyoto',
    image: '/images/kyoto-university.jpg'
  },
  {
    name: 'Université Waseda',
    nameJP: '早稲田大学',
    type: 'Privé',
    ranking: '#3',
    programs: ['Commerce', 'Sciences Politiques', 'Lettres', 'Sciences'],
    tuition: '1,200,000 ¥/an',
    location: 'Tokyo',
    image: '/images/waseda-university.jpg'
  },
  {
    name: 'Université Keio',
    nameJP: '慶應義塾大学',
    type: 'Privé',
    ranking: '#4',
    programs: ['Médecine', 'Commerce', 'Sciences Politiques', 'Lettres'],
    tuition: '1,350,000 ¥/an',
    location: 'Tokyo',
    image: '/images/keio-university.jpg'
  }
];

const scholarships = [
  {
    name: 'MEXT Scholarship',
    amount: '143,000 ¥/mois',
    duration: '5 ans max',
    eligibility: 'Étudiants étrangers',
    description: 'Bourse du gouvernement japonais pour les étudiants internationaux'
  },
  {
    name: 'JASSO Scholarship',
    amount: '48,000 ¥/mois',
    duration: '2 ans max',
    eligibility: 'Étudiants en échange',
    description: 'Bourse pour les étudiants en programme d\'échange'
  },
  {
    name: 'Bourse universitaire',
    amount: 'Variable',
    duration: 'Variable',
    eligibility: 'Selon l\'université',
    description: 'Bourses spécifiques à chaque université'
  }
];

const steps = [
  {
    step: 1,
    title: 'Recherche et sélection',
    description: 'Identifiez les universités et programmes qui correspondent à vos objectifs',
    icon: BuildingLibraryIcon
  },
  {
    step: 2,
    title: 'Préparation des documents',
    description: 'Rassemblez tous les documents nécessaires (diplômes, relevés, lettres de motivation)',
    icon: DocumentTextIcon
  },
  {
    step: 3,
    title: 'Candidature',
    description: 'Soumettez votre candidature en respectant les délais',
    icon: ClockIcon
  },
  {
    step: 4,
    title: 'Visa étudiant',
    description: 'Obtenez votre Certificate of Eligibility puis votre visa étudiant',
    icon: UserGroupIcon
  },
  {
    step: 5,
    title: 'Préparation du départ',
    description: 'Organisez votre logement, assurance et autres démarches pratiques',
    icon: HomeIcon
  }
];

export default function EtudierPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-japanese">
              Étudier au Japon
              <span className="block text-3xl mt-2 text-blue-200">日本で勉強する</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Découvrez les meilleures universités, bourses et conseils pour réussir vos études au pays du soleil levant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#universities"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Voir les universités
              </Link>
              <Link
                href="#scholarships"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Découvrir les bourses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">780</div>
              <div className="text-gray-600">Universités</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">312,000</div>
              <div className="text-gray-600">Étudiants internationaux</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">37</div>
              <div className="text-gray-600">Universités dans le top 500</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">€8,000</div>
              <div className="text-gray-600">Coût moyen par an</div>
            </div>
          </div>
        </div>
      </section>

      {/* Démarches */}
      <section id="demarches" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Démarches pour étudier au Japon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suivez ces étapes pour réussir votre candidature et partir étudier au Japon
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.step} className="flex items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-8">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <step.icon className="h-6 w-6 text-indigo-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universités */}
      <section id="universities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Universités populaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les meilleures universités japonaises pour les étudiants internationaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🏛️</div>
                    <div className="text-sm font-semibold">Rang {university.ranking}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                    <span className="text-sm text-gray-500">{university.nameJP}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">{university.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frais de scolarité:</span>
                      <span className="font-semibold">{university.tuition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Localisation:</span>
                      <span className="font-semibold">{university.location}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Programmes populaires:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bourses */}
      <section id="scholarships" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bourses et financements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les différentes options de financement pour vos études au Japon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-300 transition-colors">
                <div className="text-center mb-4">
                  <CurrencyYenIcon className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montant:</span>
                    <span className="font-semibold text-indigo-600">{scholarship.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée:</span>
                    <span className="font-semibold">{scholarship.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Éligibilité:</span>
                    <span className="font-semibold">{scholarship.eligibility}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">{scholarship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer votre aventure ?</h2>
          <p className="text-xl mb-8">
            Rejoignez notre communauté et obtenez des conseils personnalisés pour vos études au Japon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/forum"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Poser une question
            </Link>
            <Link
              href="/se-preparer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Préparer son départ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
