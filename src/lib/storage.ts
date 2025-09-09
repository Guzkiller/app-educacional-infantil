// Sistema de armazenamento local para o EduCare
import { User, Child, UserPreferences, Activity, Milestone, Lesson, Class } from './types';

// Classe base para armazenamento
class LocalStorage<T extends { id: string }> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  // Obter todos os itens
  getAll(): T[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Erro ao carregar ${this.key}:`, error);
      return [];
    }
  }

  // Obter item por ID
  getById(id: string): T | null {
    const items = this.getAll();
    return items.find(item => item.id === id) || null;
  }

  // Adicionar novo item
  add(item: T): void {
    if (typeof window === 'undefined') return;
    
    try {
      const items = this.getAll();
      const existingIndex = items.findIndex(existing => existing.id === item.id);
      
      if (existingIndex >= 0) {
        items[existingIndex] = item;
      } else {
        items.push(item);
      }
      
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (error) {
      console.error(`Erro ao adicionar item em ${this.key}:`, error);
    }
  }

  // Atualizar item existente
  update(id: string, updates: Partial<T>): void {
    if (typeof window === 'undefined') return;
    
    try {
      const items = this.getAll();
      const index = items.findIndex(item => item.id === id);
      
      if (index >= 0) {
        items[index] = { ...items[index], ...updates };
        localStorage.setItem(this.key, JSON.stringify(items));
      }
    } catch (error) {
      console.error(`Erro ao atualizar item em ${this.key}:`, error);
    }
  }

  // Remover item
  remove(id: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const items = this.getAll();
      const filteredItems = items.filter(item => item.id !== id);
      localStorage.setItem(this.key, JSON.stringify(filteredItems));
    } catch (error) {
      console.error(`Erro ao remover item de ${this.key}:`, error);
    }
  }

  // Limpar todos os itens
  clear(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error(`Erro ao limpar ${this.key}:`, error);
    }
  }
}

// Classe especializada para usuários (singleton)
class UserStorage {
  private key = 'educare_current_user';

  get(): User | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Erro ao carregar usuário atual:', error);
      return null;
    }
  }

  set(user: User): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.key, JSON.stringify(user));
    } catch (error) {
      console.error('Erro ao salvar usuário atual:', error);
    }
  }

  clear(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error('Erro ao limpar usuário atual:', error);
    }
  }
}

// Classe especializada para preferências do usuário
class PreferencesStorage {
  private key = 'educare_user_preferences';

  get(): UserPreferences | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
      return null;
    }
  }

  set(preferences: UserPreferences): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.key, JSON.stringify(preferences));
    } catch (error) {
      console.error('Erro ao salvar preferências:', error);
    }
  }

  clear(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error('Erro ao limpar preferências:', error);
    }
  }
}

// Classe especializada para crianças
class ChildrenStorage extends LocalStorage<Child> {
  constructor() {
    super('educare_children');
  }

  // Obter crianças por ID do pai/mãe
  getByParent(parentId: string): Child[] {
    return this.getAll().filter(child => child.parentId === parentId);
  }

  // Obter crianças por faixa etária
  getByAgeRange(minMonths: number, maxMonths: number): Child[] {
    return this.getAll().filter(child => {
      const ageInMonths = this.calculateAgeInMonths(child.birthDate);
      return ageInMonths >= minMonths && ageInMonths <= maxMonths;
    });
  }

  private calculateAgeInMonths(birthDate: string): number {
    const birth = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 30.44); // Aproximação de meses
  }
}

// Classe especializada para atividades
class ActivitiesStorage extends LocalStorage<Activity> {
  constructor() {
    super('educare_activities');
  }

  // Obter atividades por faixa etária
  getByAge(ageInMonths: number): Activity[] {
    return this.getAll().filter(activity => {
      // Verificação de segurança para evitar erro quando ageRange for undefined
      if (!activity.ageRange || typeof activity.ageRange.min !== 'number' || typeof activity.ageRange.max !== 'number') {
        console.warn(`Atividade ${activity.id} tem ageRange inválido:`, activity.ageRange);
        return false;
      }
      return ageInMonths >= activity.ageRange.min && ageInMonths <= activity.ageRange.max;
    });
  }

  // Obter atividades por categoria
  getByCategory(category: Activity['category']): Activity[] {
    return this.getAll().filter(activity => activity.category === category);
  }

  // Obter atividades concluídas
  getCompleted(): Activity[] {
    return this.getAll().filter(activity => activity.completed === true);
  }

  // Obter atividades pendentes
  getPending(): Activity[] {
    return this.getAll().filter(activity => !activity.completed);
  }
}

// Classe especializada para marcos de desenvolvimento
class MilestonesStorage extends LocalStorage<Milestone> {
  constructor() {
    super('educare_milestones');
  }

  // Obter marcos por faixa etária
  getByAge(ageInMonths: number): Milestone[] {
    return this.getAll().filter(milestone => {
      // Verificação de segurança para evitar erro quando ageRange for undefined
      if (!milestone.ageRange || typeof milestone.ageRange.min !== 'number' || typeof milestone.ageRange.max !== 'number') {
        console.warn(`Marco ${milestone.id} tem ageRange inválido:`, milestone.ageRange);
        return false;
      }
      return ageInMonths >= milestone.ageRange.min && ageInMonths <= milestone.ageRange.max;
    });
  }

  // Obter marcos por categoria
  getByCategory(category: Milestone['category']): Milestone[] {
    return this.getAll().filter(milestone => milestone.category === category);
  }

  // Obter marcos alcançados
  getAchieved(): Milestone[] {
    return this.getAll().filter(milestone => milestone.achieved === true);
  }

  // Obter marcos pendentes
  getPending(): Milestone[] {
    return this.getAll().filter(milestone => !milestone.achieved);
  }
}

// Classe especializada para aulas
class LessonsStorage extends LocalStorage<Lesson> {
  constructor() {
    super('educare_lessons');
  }

  // Obter aulas por professor
  getByTeacher(teacherId: string): Lesson[] {
    return this.getAll().filter(lesson => lesson.teacherId === teacherId);
  }

  // Obter aulas por turma
  getByClass(classId: string): Lesson[] {
    return this.getAll().filter(lesson => lesson.classId === classId);
  }

  // Obter aulas por status
  getByStatus(status: Lesson['status']): Lesson[] {
    return this.getAll().filter(lesson => lesson.status === status);
  }

  // Obter aulas agendadas para hoje
  getTodayLessons(): Lesson[] {
    const today = new Date().toISOString().split('T')[0];
    return this.getAll().filter(lesson => 
      lesson.scheduledDate?.startsWith(today)
    );
  }
}

// Classe especializada para turmas
class ClassesStorage extends LocalStorage<Class> {
  constructor() {
    super('educare_classes');
  }

  // Obter turmas por professor
  getByTeacher(teacherId: string): Class[] {
    return this.getAll().filter(classItem => classItem.teacherId === teacherId);
  }

  // Obter turmas ativas
  getActive(): Class[] {
    return this.getAll().filter(classItem => classItem.status === 'active');
  }

  // Obter turmas por faixa etária
  getByAgeGroup(ageGroup: string): Class[] {
    return this.getAll().filter(classItem => classItem.ageGroup === ageGroup);
  }
}

// Instâncias dos storages
export const userStorage = new UserStorage();
export const preferencesStorage = new PreferencesStorage();
export const childrenStorage = new ChildrenStorage();
export const activitiesStorage = new ActivitiesStorage();
export const milestonesStorage = new MilestonesStorage();
export const lessonsStorage = new LessonsStorage();
export const classesStorage = new ClassesStorage();

// Função utilitária para limpar todos os dados
export const clearAllData = (): void => {
  userStorage.clear();
  preferencesStorage.clear();
  childrenStorage.clear();
  activitiesStorage.clear();
  milestonesStorage.clear();
  lessonsStorage.clear();
  classesStorage.clear();
};

// Função utilitária para exportar todos os dados
export const exportAllData = (): string => {
  const data = {
    user: userStorage.get(),
    preferences: preferencesStorage.get(),
    children: childrenStorage.getAll(),
    activities: activitiesStorage.getAll(),
    milestones: milestonesStorage.getAll(),
    lessons: lessonsStorage.getAll(),
    classes: classesStorage.getAll(),
    exportedAt: new Date().toISOString()
  };
  
  return JSON.stringify(data, null, 2);
};

// Função utilitária para importar dados
export const importAllData = (jsonData: string): boolean => {
  try {
    const data = JSON.parse(jsonData);
    
    if (data.user) userStorage.set(data.user);
    if (data.preferences) preferencesStorage.set(data.preferences);
    if (data.children) {
      childrenStorage.clear();
      data.children.forEach((child: Child) => childrenStorage.add(child));
    }
    if (data.activities) {
      activitiesStorage.clear();
      data.activities.forEach((activity: Activity) => activitiesStorage.add(activity));
    }
    if (data.milestones) {
      milestonesStorage.clear();
      data.milestones.forEach((milestone: Milestone) => milestonesStorage.add(milestone));
    }
    if (data.lessons) {
      lessonsStorage.clear();
      data.lessons.forEach((lesson: Lesson) => lessonsStorage.add(lesson));
    }
    if (data.classes) {
      classesStorage.clear();
      data.classes.forEach((classItem: Class) => classesStorage.add(classItem));
    }
    
    return true;
  } catch (error) {
    console.error('Erro ao importar dados:', error);
    return false;
  }
};