const MeetingHistory = require('../../model/schema/meeting')
const mongoose = require('mongoose');

// Add a new meeting
const add = async (req, res) => {
    try {
        const { agenda, attendes, attendesLead, location, related, dateTime, notes, createBy } = req.body;
        const newMeeting = new MeetingHistory({
            agenda,
            attendes,
            attendesLead,
            location,
            related,
            dateTime,
            notes,
            createBy,
        });
        await newMeeting.save();
        res.status(201).json({ message: 'MeetingHistory created successfully', meeting: newMeeting });
    } catch (error) {
        res.status(500).json({ message: 'Error creating meeting', error: error.message });
    }
};

// Get all meetings
const index = async (req, res) => {
    try {
        const meetings = await MeetingHistory.find({ deleted: false })
            .populate('attendes')
            .populate('attendesLead')
            .populate('createBy');
        res.status(200).json(meetings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching meetings', error: error.message });
    }
};

// Get a single meeting by ID
const view = async (req, res) => {
    try {
        const meeting = await MeetingHistory.findById(req.params.id)
            .populate('attendes')
            .populate('attendesLead')
            .populate('createBy');
        if (!meeting || meeting.deleted) {
            return res.status(404).json({ message: 'MeetingHistory not found' });
        }
        res.status(200).json(meeting);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching meeting', error: error.message });
    }
};

// Soft delete a meeting by ID
const deleteData = async (req, res) => {
    try {
        const meeting = await MeetingHistory.findById(req.params.id);
        if (!meeting || meeting.deleted) {
            return res.status(404).json({ message: 'MeetingHistory not found' });
        }
        meeting.deleted = true;
        await meeting.save();
        res.status(200).json({ message: 'MeetingHistory deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting meeting', error: error.message });
    }
};

// Soft delete multiple meetings by IDs
const deleteMany = async (req, res) => {
    try {
        const ids = req.body;
        await MeetingHistory.updateMany({ _id: { $in: ids } }, { $set: { deleted: true } });
        res.status(200).json({ message: 'Meetings deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting meetings', error: error.message });
    }
};


module.exports = { add, index, view, deleteData, deleteMany }