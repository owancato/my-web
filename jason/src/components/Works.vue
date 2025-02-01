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
            <!-- Add transition-group wrapper around task list for animated sequential display -->
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
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.timeline-container {
  width: 100%;
  max-width: 800px;
}

.timeline {
  margin: 10px 0;
  color: #ddd;
}

.timeline-item {
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  cursor: pointer;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 8px;
  width: 12px;
  height: 12px;
  background-color: #ddd;
  border: 2px solid #3498db;
  border-radius: 50%;
  transform: translateX(-50%);
}

.timeline-content {
  border-radius: 5px;
  text-align: left;
  width: 100%;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transform: translateX(10px);
}
.list-enter-from,
.list-leave-to {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateX(10px);
}

/* Style the timeline container */
.timeline-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
  padding-left: 10px; /* Space for the dot */
  padding-right: 10px; /* Space for the dot */
  display: flex;
  align-items: center;
  color: #ddd;
  width: 100%;
}

/* Timeline content block */
.timeline-content {
  padding-left: 10px; /* Space for the dot */
  padding-right: 10px; /* Space for the dot */
  width: 100%;
  display: flex;
  flex-direction: column;
}

.job-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ddd;
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.job-title:hover {
  background-color: #6a6d70; /* Light blue background on hover */
  color: #ddd; /* Darker blue text on hover */
}

#job_timeline {
  background-color: #181818;
}
</style>
