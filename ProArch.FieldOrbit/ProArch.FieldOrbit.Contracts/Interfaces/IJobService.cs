﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProArch.FieldOrbit.Models;

namespace ProArch.FieldOrbit.Contracts.Interfaces
{
    /// <summary>
    /// Job interface
    /// </summary>
    public interface IJobService
    {
        /// <summary>
        /// Create Job
        /// </summary>
        /// <param name="job"></param>
        /// <returns></returns>
        bool CreateJob(Job job);

        /// <summary>
        /// Update Job
        /// </summary>
        /// <param name="job"></param>
        /// <returns></returns>
        bool UpdateJob(Job job);

        /// <summary>
        /// Get job by job id
        /// </summary>
        /// <param name="JobId"></param>
        /// <returns></returns>
        Job GetJobByID(int JobId);

        VRJob GetVRJobByID(int JobId);
        /// <summary>
        /// Get jobs by emplyeeid
        /// </summary>
        /// <param name="EmployeeID"></param>
        /// <returns></returns>
        List<Job> GetUserJob(int EmployeeID);

        /// <summary>
        /// Gets all jobs list
        /// </summary>
        /// <returns></returns>
        List<Job> GetJobs();

        /// <summary>
        /// Update job
        /// </summary>
        /// <param name="JobID"></param>
        /// <param name="Status"></param>
        /// <param name="Comments"></param>
        /// <param name="Observations"></param>
        /// <returns></returns>
        bool UpdateJobWithComments(int JobID, string Status, string Comments, string Observations);
        bool EnterTimeSheet(Job job, Timesheet timeSheet);        
    }
}
