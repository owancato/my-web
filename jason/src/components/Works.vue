<template>
  <div class="section" data-anchor="works">
    <h1>💼 {{ $t("works") }}</h1>
    <div class="works-container">
      <v-timeline line-color="#ddd" align="start" id="job_timeline">
        <v-timeline-item
          v-for="(job, i) in jobs"
          :key="i"
          :dot-color="job.color || 'primary'"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold`"
              v-text="job.period"
              class="timeline-opposite"
            ></div>
          </template>
          <div class="timeline-content">
            <h2 
              :class="`mt-n1 headline font-weight-light mb-4`"
              @click="toggleJob(i)"
              class="job-title"
            >
              {{ job.title }} - {{ job.company }}
            </h2>
            <transition-group name="list" tag="div" class="task-list">
              <div
                v-if="expandedJobIndex === i"
                v-for="(task, idx) in job.tasks"
                :key="idx"
                class="task-item"
                :style="{ transitionDelay: `${idx * 0.1}s` }"
              >
                <span class="task-dot"></span>
                {{ task }}
              </div>
            </transition-group>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// Define the work experience data
const jobs = ref([
  {
    title: 'Backend Engineer',
    company: '拍拍圈科技股份有限公司',
    period: '2024/4 ~',
    tasks: [
      t("popchill_tasks[0]"),
      t("popchill_tasks[1]"),
      t("popchill_tasks[2]"),
      t("popchill_tasks[3]"),
      t("popchill_tasks[4]"),
    ],
    color: '#ddd'
  },
  {
    title: 'Backend Engineer',
    company: '樂居科技股份有限公司',
    period: '2022/9 ~ 2024/4',
    tasks: [
      t("leju_tasks.backend[0]"),
      t("leju_tasks.backend[1]"),
      t("leju_tasks.backend[2]"),
      t("leju_tasks.backend[3]"),
    ],
    color: '#ddd'
  },
  {
    title: 'Data Intern',
    company: '樂居科技股份有限公司',
    period: '2022/7 ~ 2022/8',
    tasks: [
      t("leju_tasks.intern[0]"),
      t("leju_tasks.intern[1]"),
      t("leju_tasks.intern[2]"),
    ],
    color: '#ddd'
  }
]);

// Watch for language change and update jobs data accordingly
watch(() => locale.value, () => {
  jobs.value = [
    {
      title: 'Backend Engineer',
      company: '拍拍圈科技股份有限公司',
      period: '2024/4 ~',
      tasks: [
        t("popchill_tasks[0]"),
        t("popchill_tasks[1]"),
        t("popchill_tasks[2]"),
        t("popchill_tasks[3]"),
        t("popchill_tasks[4]"),
      ],
      color: 'white'
    },
    {
      title: 'Backend Engineer',
      company: '樂居科技股份有限公司',
      period: '2022/9 ~ 2024/4',
      tasks: [
        t("leju_tasks.backend[0]"),
        t("leju_tasks.backend[1]"),
        t("leju_tasks.backend[2]"),
        t("leju_tasks.backend[3]"),
      ],
      color: 'white'
    },
    {
      title: 'Data Intern',
      company: '樂居科技股份有限公司',
      period: '2022/7 ~ 2022/8',
      tasks: [
        t("leju_tasks.intern[0]"),
        t("leju_tasks.intern[1]"),
        t("leju_tasks.intern[2]"),
      ],
      color: 'white'
    }
  ];
});

// Create a reactive variable to track the expanded job
const expandedJobIndex = ref(null);

// Function to toggle job expansion
const toggleJob = (jobIndex) => {
  if (expandedJobIndex.value === jobIndex) {
    // If the job is already expanded, collapse it
    expandedJobIndex.value = null;
  } else {
    // Expand the clicked job
    expandedJobIndex.value = jobIndex;
  }
};

</script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Changed to flex-start for better alignment */
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.timeline-container {
  width: 100%;
  max-width: 800px;
}

.timeline-item {
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  cursor: pointer;
}

.timeline-content {
  border-radius: 5px;
  text-align: left;
  width: 100%;
}

.works-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

/* Task List */
.task-list {
  padding-left: 20px;
}

.task-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  transition-delay: 0s;
  transform: translateY(10px);
}

.task-dot {
  width: 8px;
  height: 8px;
  background-color: #fcfcfc;
  border-radius: 50%;
  margin-right: 8px;
}

/* Opposite content (date) should align to the center */
.timeline-opposite {
  padding-left: 10px; 
  padding-right: 10px; 
  display: flex;
  align-items: center;
  color: #ddd;
  width: 100%;
}

.job-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ddd;
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.job-title:hover {
  background-color: #6a6d70;
  color: #ddd;
}

#job_timeline {
  background-color: #181818;
}

/* Media Queries for mobile */
@media (max-width: 768px) {
  .section {
    padding-top: 500px !important;
  }

  h1 {
    font-size: 3vh;
  }

  .task-dot {
    width: 0px;
    height: 0px;
    background-color: #fcfcfc;
    border-radius: 100%;
  }

  .works-container {
    gap: 1rem;  /* Reduce gap between items on smaller screens */
  }

  .timeline-item {
    padding-left: 15px; /* Reduce padding on mobile */
    padding-right: 15px;
  }

  .job-title {
    font-size: 1rem; /* Smaller font size for job titles on mobile */
    margin-bottom: 10px; /* Less margin on mobile */
  }

  .task-item {
    font-size: 0.875rem; /* Smaller font size for task items */
  }

  .task-list {
    padding-left: 15px; /* Adjust padding for mobile */
  }

  /* When the job is expanded, move the task items down */
  .task-item-expanded {
    transform: translateY(20px); /* Moves the task item down */
  }

  .timeline-content {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
